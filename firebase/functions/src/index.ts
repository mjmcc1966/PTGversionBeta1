
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const verifyActivationCode = functions.https.onCall(async (data, context) => {
  const code = data.code;

  if (!code || typeof code !== 'string') {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with one argument "code" containing the activation code.'
    );
  }

  const codeRef = db.collection('activation_codes').doc(code);
  const codeDoc = await codeRef.get();

  if (!codeDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'Invalid activation code.');
  }

  const codeData = codeDoc.data() || {};
  const useCount = codeData.useCount || 0;

  if (useCount >= 5) {
    throw new functions.https.HttpsError(
      'resource-exhausted',
      'This activation code has reached its maximum number of uses.'
    );
  }

  return { success: true };
});

export const updateActivationCodeOnRegister = functions.https.onCall(async (data, context) => {
  const { code, userId } = data;

  if (!code || !userId) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with "code" and "userId".'
    );
  }

  const codeRef = db.collection('activation_codes').doc(code);

  await db.runTransaction(async (transaction) => {
    const codeDoc = await transaction.get(codeRef);
    if (!codeDoc.exists) {
      throw new functions.https.HttpsError('not-found', 'Invalid activation code.');
    }

    const codeData = codeDoc.data() || {};
    const useCount = codeData.useCount || 0;
    const users = codeData.users || [];

    if (useCount >= 5) {
      throw new functions.https.HttpsError(
        'resource-exhausted',
        'This activation code has reached its maximum number of uses.'
      );
    }

    transaction.update(codeRef, {
      useCount: useCount + 1,
      users: [...users, userId],
    });
  });

  return { success: true };
});
