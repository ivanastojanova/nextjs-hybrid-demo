'use client';

import { User } from '@/shared/types';
import UserForm from './UserForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserEditFormWrapperProps {
  user: User;
  updateFn: (userData: User) => Promise<any>;
  onCancel: () => void;
  setMessage: (msg: string) => void;
  setLoading: (loading: boolean) => void;
}

export default function UserEditFormWrapper({
  user,
  updateFn,
  onCancel,
  setMessage,
  setLoading,
}: UserEditFormWrapperProps) {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage('Saving data via Server Action...');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const updatedUser: User = {
      id: formData.get('id') as string,
      name: formData.get('name') as string,
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      website: formData.get('website') as string,
    };

    try {
      const result = await updateFn(updatedUser);
      console.log(result);
      onCancel();
    } catch (error) {
      setMessage('Error saving data.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <UserForm user={user} formName="edit-interaction" />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          type="button"
          onClick={onCancel}
          disabled={false}
          style={{ padding: '10px 20px', backgroundColor: '#9ca3af', color: 'white' }}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={false}
          style={{ padding: '10px 20px', backgroundColor: '#f97316', color: 'white' }}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
