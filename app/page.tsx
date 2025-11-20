// app/page.tsx (Server Component - default)

import { User } from "@/shared/types";

import UserDisplay from "../src/components/UserDisplay";

async function getFakeUserData(): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }
  const user: User = await res.json();

  // Simulate network delay (2 seconds)
  await new Promise(resolve => setTimeout(resolve, 2000));
  return user;
}

export default async function HomePage() {
  const user: User = await getFakeUserData();

return (
    <main style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px', 
      backgroundColor: '#e5e7eb' 
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'extrabold', marginBottom: '20px', color: '#1f2937' }}>
        Next.js CRUD Flow: Step 1 (READ)
      </h1>

      <UserDisplay user={user} />

    </main>
);
}