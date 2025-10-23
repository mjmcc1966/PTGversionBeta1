'use server';
/**
 * @fileOverview A flow for seeding data into Firestore using the Admin SDK.
 * This bypasses security rules for administrative tasks.
 */
import * as admin from 'firebase-admin';
import { getApps, initializeApp, getApp } from 'firebase-admin/app';
import { z } from 'zod';

// This is the recommended way to initialize the Admin SDK in a serverless environment.
// It ensures that the app is not initialized multiple times.
if (getApps().length === 0) {
  initializeApp();
}

const db = admin.firestore();

const SeedDataInputSchema = z.object({
  collection: z.string().describe('The name of the Firestore collection to seed.'),
  data: z.array(z.any()).describe('An array of document objects to write to the collection.'),
});

type SeedDataInput = z.infer<typeof SeedDataInputSchema>;

export async function seedData(input: SeedDataInput) {
  // Validate input at runtime
  const validation = SeedDataInputSchema.safeParse(input);
  if (!validation.success) {
    throw new Error(`Invalid input: ${validation.error.message}`);
  }

  const { collection, data } = validation.data;
  const batch = db.batch();

  try {
    data.forEach((item) => {
      if (!item.id) {
        throw new Error('All data items must have an "id" property.');
      }
      const docRef = db.collection(collection).doc(item.id.toString());
      batch.set(docRef, item);
    });

    await batch.commit();
    return {
      success: true,
      message: `Successfully seeded ${data.length} documents into ${collection}.`,
    };
  } catch (error: any) {
    console.error(`Error seeding data into ${collection}:`, error);
    // Re-throwing a serializable error for the client
    throw new Error(`Failed to seed data: ${error.message}`);
  }
}
