import { User } from '@/shared/types';
import UserActionWrapper from '@/src/components/UserActionWrapper';
import BackButton from '@/src/components/BackButton';

interface UserDetailPageProps {
  params: Promise<{ userId: string }>;
}

async function getUserData(userId: string): Promise<User> {
  console.log(`[SERVER] Fetching data for user ID: ${userId}`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(`Failed to fetch user data for ID: ${userId}`);

  const user: User = await res.json();

  // Optional: simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return user;
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { userId } = await params;

  let user: User | null = null;

  if (!userId) {
    return (
      <main style={{ padding: '40px' }}>
        <h1 style={{ color: 'red' }}>User Not Found</h1>
        <p>Could not load profile for ID: undefined.</p>
      </main>
    );
  }

  try {
    user = await getUserData(userId);
  } catch (error) {
    console.error(error);
  }

  if (!user) {
    return (
      <main style={{ padding: '40px' }}>
        <h1 style={{ color: 'red' }}>User Not Found</h1>
        <p>Could not load profile for ID: {userId}.</p>
      </main>
    );
  }

  return (
    <main
      style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <BackButton />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>
        User Detail: {user.name}
      </h1>

      <UserActionWrapper user={user} />
    </main>
  );
}
