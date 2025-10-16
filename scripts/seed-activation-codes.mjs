
import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

// Import your service account key
// Make sure the path to this file is correct
import serviceAccount from '../serviceAccountKey.json' assert { type: 'json' };

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

function generateActivationCode() {
  // Generate a UUID and remove hyphens, then take the first 16 characters
  return uuidv4().replace(/-/g, '').substring(0, 16);
}

async function seedActivationCodes() {
  const codesCollection = db.collection('activationCodes');
  const batchSize = 400; // Firestore batch writes can handle up to 500 operations
  const totalCodes = 1000;
  const codesToGenerate = Array.from({ length: totalCodes }, () => generateActivationCode());

  console.log(`Generating ${totalCodes} unique activation codes...`);

  for (let i = 0; i < totalCodes; i += batchSize) {
    const batch = db.batch();
    const chunk = codesToGenerate.slice(i, i + batchSize);

    chunk.forEach(code => {
      const codeRef = codesCollection.doc(code);
      batch.set(codeRef, { uses: 0 });
    });

    await batch.commit();
    console.log(`Successfully uploaded batch ${Math.floor(i / batchSize) + 1}...`);
  }

  console.log('\n----------------------------------------');
  console.log('✅ Success!');
  console.log(`Uploaded ${totalCodes} activation codes to the 'activationCodes' collection.`);
  console.log('----------------------------------------');
  process.exit(0);
}

seedActivationCodes().catch(error => {
  console.error('Error seeding activation codes:', error);
  process.exit(1);
});
