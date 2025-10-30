
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Initialize Firebase Admin SDK ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serviceAccountPath = path.join(__dirname, '..', 'serviceAccountKey.json');

let serviceAccount;
try {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
} catch (error) {
    console.error("ERROR: Could not read or parse serviceAccountKey.json.");
    console.error("Please ensure the service account key is correctly placed at the root of the project and is valid JSON.");
    process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
console.log('Firebase Admin SDK initialized successfully.');

// --- Load Data ---
const questionsPath = path.join(__dirname, '..', 'data', 'questions.json');
const questionsData = JSON.parse(readFileSync(questionsPath, 'utf8'));
console.log(`Loaded ${questionsData.length} questions from data/questions.json.`);

// --- Upload to Firestore ---
async function seedDatabase() {
  const questionsCollection = db.collection('questions');
  let batch = db.batch();
  let operationCount = 0;
  let totalUploaded = 0;

  console.log('Starting upload to Firestore...');

  for (const question of questionsData) {
    if (!question.id) {
        console.warn('Skipping a question because it is missing an "id" field:', question);
        continue;
    }
    const docRef = questionsCollection.doc(question.id.toString());
    batch.set(docRef, question);
    operationCount++;
    
    // Firestore batches have a 500-operation limit.
    if (operationCount >= 499) {
      await batch.commit();
      totalUploaded += operationCount;
      console.log(`Committed a batch of ${operationCount} documents.`);
      batch = db.batch();
      operationCount = 0;
    }
  }

  // Commit the final batch.
  if (operationCount > 0) {
    await batch.commit();
    totalUploaded += operationCount;
    console.log(`Committed the final batch of ${operationCount} documents.`);
  }
  
  console.log('\n-----------------------------------');
  console.log(`✅ Seeding complete! Uploaded ${totalUploaded} questions.`);
  console.log('-----------------------------------\n');
}

seedDatabase().catch(error => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
