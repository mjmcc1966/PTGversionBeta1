
'use server';
/**
 * @fileOverview A flow for seeding data into Firestore using the Admin SDK.
 * This bypasses security rules for administrative tasks.
 *
 * - seedData - A function that takes a collection name and data array to seed.
 * - SeedDataInput - The input type for the seedData function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as admin from 'firebase-admin';

// Initialize the Firebase Admin SDK if it hasn't been already.
if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();

export const SeedDataInputSchema = z.object({
  collection: z.string().describe('The name of the Firestore collection to seed.'),
  data: z.array(z.any()).describe('An array of document objects to write to the collection.'),
});

export type SeedDataInput = z.infer<typeof SeedDataInputSchema>;

export const seedData = ai.defineFlow(
  {
    name: 'seedData',
    inputSchema: SeedDataInputSchema,
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
  },
  async (input) => {
    const { collection, data } = input;
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
      // Throwing the error will cause the flow to fail and propagate the error to the client.
      throw new Error(`Failed to seed data: ${error.message}`);
    }
  }
);
