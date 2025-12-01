import BackButton from '@/src/components/BackButton';
import NewUserForm from '@/src/components/NewUserForm';

export default function NewUserFormPage() {
  return (
    <main
      style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <BackButton />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>New User:</h1>

      <NewUserForm />
    </main>
  );
}
