// src/components/NewUserForm.tsx
'use client';

import UserForm from './UserForm';
import { createUser, cancelAction } from '@/src/lib/actions';

export default function NewUserForm() {
  return (
    <div style={{ padding: '10px', width: '100%', maxWidth: '500px' }}>
      <form action={createUser}>
        <UserForm formName="new-user" />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            padding: '0 25px',
          }}
        >
          <button
            type="submit"
            formAction={cancelAction}
            formNoValidate
            style={{
              padding: '10px 20px',
              backgroundColor: '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Save User
          </button>
        </div>
      </form>
    </div>
  );
}
