'use server';
/**
 * @fileOverview A flow for seeding data into Firestore using the Admin SDK.
 * This bypasses security rules for administrative tasks.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as admin from 'firebase-admin';
import { getApps, initializeApp, getApp } from 'firebase-admin/app';

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

const seedDataFlow = ai.defineFlow(
  {
    name: 'seedDataFlow',
    inputSchema: SeedDataInputSchema,
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
  },
  async (input) => {
    const { collection, data } = input;
    const batch = db.batch();

    try {
      data.forEach((item) => {
        // Ensure each item has an 'id' property to use as the document ID
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
      // Throwing the error will cause the flow to fail and propagate the error to the client.
      throw new Error(`Failed to seed data: ${error.message}`);
    }
  }
);

export async function seedData(input: SeedDataInput) {
  return await seedDataFlow(input);
}
