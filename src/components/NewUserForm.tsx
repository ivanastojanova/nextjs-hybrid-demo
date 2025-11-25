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
    <div style={{ padding: '10px', width: '100%', maxWidth: '500px' }}>
      <UserForm onSave={handleSave} onCancel={onCancel} />
    </div>
  );
}
