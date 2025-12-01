import { redirect } from 'next/navigation';
import { User } from '@/shared/types';
import UserForm from '@/src/components/UserForm';
import BackButton from '@/src/components/BackButton';
import { updateUser, cancelAction } from '@/src/lib/actions';

interface EditPageProps {
  params: Promise<{ id: string }>;
}

async function getUserData(userId: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) {
    redirect('/profiles');
  }
  return res.json();
}

export default async function UserEditPage({ params }: EditPageProps) {
  const { id } = await params;
  const user = await getUserData(id);

  return (
    <main
      style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}>
        <BackButton buttonText="← Back to User Detail" />
      </div>

      <form action={updateUser}>
        <UserForm user={user} formName="edit-user" />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            padding: '0 25px',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <button
            type="submit"
            formAction={cancelAction}
            formNoValidate
            style={{
              padding: '10px 20px',
              backgroundColor: '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}
