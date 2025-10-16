
import admin from 'firebase-admin';

// Import your service account key
import serviceAccount from '../serviceAccountKey.json' assert { type: 'json' };

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function getActivationCodes() {
  const codesCollection = db.collection('activationCodes');
  const snapshot = await codesCollection.get();

  if (snapshot.empty) {
    console.log('No activation codes found.');
    return;
  }

  console.log('--- Your Activation Codes ---');
  snapshot.forEach(doc => {
    console.log(doc.id);
  });
  console.log('----------------------------');
  console.log(`
Total codes found: ${snapshot.size}`);
  process.exit(0);
}

getActivationCodes().catch(error => {
  console.error('Error fetching activation codes:', error);
  process.exit(1);
});
