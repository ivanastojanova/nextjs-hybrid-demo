'use client';

import { useState } from 'react';
import { User } from "@/shared/types";
import UserListTable from "./UserListTable"; 
import CreateUserButton from "./CreateUserButton";
import UserForm from './UserForm';

interface ListWrapperProps {
  initialUsers: User[];
}

export default function ListWrapper({ initialUsers }: ListWrapperProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleSave = (newUser: Omit<User, 'id'>) => {
    console.log("Client Component: Preparing to save new user:", newUser);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setIsCreating(false);
  };

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '15px' 
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'semibold' }}>
          Current Users ({users.length})
        </h2>
        {/* ⬅️ Only show the button if not creating */}
        {!isCreating && <CreateUserButton onClick={handleCreateClick} />}
      </div>

      {isCreating ? (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <UserForm 
            onSave={handleSave} 
            onCancel={handleCancel} 
          />
        </div>
      ) : (
        <UserListTable users={users} /> 
      )}
    </div>
  );
}