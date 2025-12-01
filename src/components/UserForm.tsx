'use client';

import { useState } from 'react';
import { User } from '@/shared/types';

interface UserFormProps {
  user?: User;
  formName?: string;
}

export default function UserForm({ user, formName = 'user-form' }: UserFormProps) {
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || '',
    phone: user?.phone || '',
    website: user?.website || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formTitle = user ? `Edit User: ${user.name}` : 'Create New User';

  return (
    <div
      style={{
        border: '2px solid #f97316',
        padding: '25px',
        borderRadius: '8px',
        backgroundColor: '#fff7ed',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ea580c' }}>{formTitle}</h2>

      {['name', 'username', 'email', 'phone', 'website'].map((key) => (
        <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor={`${formName}-${key}`}
            style={{ fontWeight: '600', marginBottom: '5px', textTransform: 'capitalize' }}
          >
            {key}:
          </label>
          <input
            type="text"
            id={`${formName}-${key}`}
            name={key}
            value={formData[key as keyof typeof formData]}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #fdba74', borderRadius: '4px' }}
          />
        </div>
      ))}

      {user && <input type="hidden" name="id" value={user.id} />}
    </div>
  );
}
