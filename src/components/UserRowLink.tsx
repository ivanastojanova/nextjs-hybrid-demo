'use client';

import { useRouter } from 'next/navigation';
import { User } from '@/shared/types';

interface UserRowLinkProps {
  user: User;
  children: React.ReactNode;
}

export default function UserRowLink({ user, children }: UserRowLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/profiles/${user.id}`);
  };

  return (
    <tr
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        transition: 'background-color 0.1s',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      {children}
    </tr>
  );
}
