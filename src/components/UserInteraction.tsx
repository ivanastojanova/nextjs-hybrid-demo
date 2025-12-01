'use client';

import { useState } from 'react';
import { User } from '@/shared/types';
import UserDisplay from './UserDisplay';
import UserEditFormWrapper from './UserEditFormWrapper';

interface UserInteractionProps {
  user: User;
  updateFn: (userData: User) => Promise<any>;
}

export default function UserInteraction({ user, updateFn }: UserInteractionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentData, setCurrentData] = useState<User>(user);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ padding: '10px', width: '100%', maxWidth: '500px' }}>
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <span
          style={{
            fontWeight: 'bold',
            color: isEditing ? '#dc2626' : '#16a34a',
          }}
        >
          Mode: {isEditing ? 'Editing' : 'Viewing'}
        </span>
      </div>

      <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>

      {isEditing ? (
        <UserEditFormWrapper
          user={currentData}
          updateFn={updateFn}
          onCancel={toggleEdit}
          setMessage={setMessage}
          setLoading={setLoading}
        />
      ) : (
        <UserDisplay user={currentData} />
      )}
      {!isEditing && (
        <button
          onClick={toggleEdit}
          disabled={loading}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          {loading ? 'Processing...' : 'Edit Profile'}
        </button>
      )}
    </div>
  );
}
