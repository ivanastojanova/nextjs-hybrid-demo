import BackButton from '@/src/components/BackButton';
import NewUserForm from '@/src/components/NewUserForm';
import { createUser, cancelCallback } from '../../../src/lib/actions';

export default function NewUserFormPage() {
  return (
    <main
      style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <BackButton />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>New User:</h1>

      <NewUserForm onSaveSuccess={createUser} onCancel={cancelCallback} />
    </main>
  );
}
