'use client';

import { User } from '@/shared/types';
import { updateUser } from '@/src/lib/actions';
import { useRouter } from 'next/navigation';
import UserInteraction from './UserInteraction';

interface UserActionWrapperProps {
  user: User;
}

export default function UserActionWrapper({ user }: UserActionWrapperProps) {
  const router = useRouter();

  const clientUpdateFn = async (userData: User) => {
    const formData = new FormData();
    formData.append('id', userData.id);
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('username', userData.username || '');
    formData.append('phone', userData.phone || '');
    formData.append('website', userData.website || '');

    try {
      await updateUser(formData);
      router.refresh();
    } catch (error) {
      console.error('Error calling updateUser action:', error);
    }
  };

  return <UserInteraction user={user} updateFn={clientUpdateFn} />;
}
