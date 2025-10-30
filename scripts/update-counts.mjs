
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
    process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
console.log('Firebase Admin SDK initialized successfully.');

// --- Categories ---
const CATEGORIES = ['state_trivia', 'general_trivia', 'government_trivia'];

// --- Update Counts in Firestore ---
async function updateCounts() {
  console.log('Starting to update question counts...');
  const questionsCollection = db.collection('questions');

  for (const category of CATEGORIES) {
    const categoryQuery = questionsCollection.where("category", "==", category);
    const snapshot = await categoryQuery.get();
    const total = snapshot.size;

    console.log(`Found ${total} questions for category: ${category}`);

    const countDocRef = db.collection('counts').doc(category);
    await countDocRef.set({ total: total });
    console.log(`Updated count for ${category} to ${total}.`);
  }

  console.log('\n----------------------------------');
  console.log('✅ All category counts updated successfully!');
  console.log('----------------------------------\n');
}

updateCounts().catch(error => {
  console.error('Error updating counts:', error);
  process.exit(1);
});
