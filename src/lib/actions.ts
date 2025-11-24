'use server';

import { User } from '@/shared/types';

/**
 * Handles the update operation for a user.
 * @param userData The updated user object, including the ID.
 * @returns A status message.
 */
export async function updateUser(userData: User) {
  console.log(`[SERVER ACTION] Received update request for User ID: ${userData.id}`);

  // STEP 1: SERVER-SIDE VALIDATION
  // STEP 2: DATABASE INTERACTION (Simulated)

  // Simulate a network/database update delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log(`[SERVER ACTION] Successfully updated user data:`, userData);
  return {
    status: 'success',
    message: `User ${userData.name} updated successfully on the server.`,
    updatedData: userData,
  };
}
