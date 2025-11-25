'use client';

import UserForm from './UserForm';
import { User } from '@/shared/types';

interface NewUserFormProps {
  onSaveSuccess: (newUser: Omit<User, 'id'>) => void;
  onCancel: () => void;
}

export default function NewUserForm({ onSaveSuccess, onCancel }: NewUserFormProps) {
  const handleSave = (newUser: Omit<User, 'id'>) => {
    console.log('Client Component: Preparing to save new user:', newUser);
    onSaveSuccess(newUser);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>Create New User</h3>
      <UserForm onSave={handleSave} onCancel={onCancel} />
    </div>
  );
}
