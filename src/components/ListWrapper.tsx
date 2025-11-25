'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/shared/types';
import UserListTable from './UserListTable';
import CreateUserButton from './CreateUserButton';

interface ListWrapperProps {
  initialUsers: User[];
}

export default function ListWrapper({ initialUsers }: ListWrapperProps) {
  const router = useRouter();
  const [users] = useState<User[]>(initialUsers);

  const handleCreateClick = () => {
    router.push('/profiles/new');
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'semibold' }}>
          Current Users ({users.length})
        </h2>

        <CreateUserButton onClick={handleCreateClick} />
      </div>

      <UserListTable users={users} />
    </div>
  );
}
