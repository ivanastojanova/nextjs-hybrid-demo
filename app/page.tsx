// app/page.tsx (Server Component - default)

import { User } from '@/shared/types';
import ListWrapper from '@/src/components/ListWrapper';

// fetch function to get a list of users
async function getUsersData(): Promise<User[]> {
  console.log('[SERVER] Fetching list of users...');
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch user list');
  }
  const users: User[] = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay
  return users;
}

export default async function HomePage() {
  const users: User[] = await getUsersData();

  return (
    <main
      style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f5f5f5' }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'extrabold',
          marginBottom: '20px',
          color: '#1f2937',
        }}
      >
        User Management Dashboard (READ & CREATE)
      </h1>

      <ListWrapper initialUsers={users} />
    </main>
  );
}
