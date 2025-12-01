'use server';

import { redirect } from 'next/navigation';
import { User } from '@/shared/types';

// ---------------------------------------------
// Updated updateUser to accept FormData
// ---------------------------------------------
export async function updateUser(formData: FormData) {
  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const username = formData.get('username') as string;
  const phone = formData.get('phone') as string;
  const website = formData.get('website') as string;

  if (!id) throw new Error('User ID is missing for update operation.');

  const updatedUserData: User = {
    id: id,
    name: name,
    email: email,
    username: username,
    phone: phone,
    website: website,
  };

  console.log(`[SERVER ACTION] Received update request for User ID: ${id}`);
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log(`[SERVER ACTION] Successfully updated user data:`, updatedUserData);

  redirect(`/profiles/${id}`);
}

// ---------------------------------------------
// Updated createUser to accept FormData
// ---------------------------------------------
export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const username = formData.get('username') as string;
  const phone = formData.get('phone') as string;
  const website = formData.get('website') as string;

  if (!name || !email) throw new Error('Name and Email are required.');

  const newUser = { name, email, username, phone, website };

  console.log(`[SERVER ACTION] Creating new user:`, newUser);
  await new Promise((resolve) => setTimeout(resolve, 1500));

  redirect('/');
}

export async function cancelAction() {
  redirect('/');
}
