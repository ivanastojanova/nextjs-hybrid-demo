'use client'; 

import { useState } from 'react';
import { User } from "@/shared/types";
import UserDisplay from "./UserDisplay"; 
import UserForm from "./UserForm";

interface UserInteractionProps {
  user: User;
}

export default function UserInteraction({ user }: UserInteractionProps) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (updatedUser: User) => {
    console.log("Client Component: Form submitted with data:", updatedUser);
    setIsEditing(false);
  };

  return (
    <div style={{ padding: '10px', width: '100%', maxWidth: '500px' }}>
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <span style={{ 
          fontWeight: 'bold', 
          color: isEditing ? '#dc2626' : '#16a34a' 
        }}>
          Mode: {isEditing ? 'Editing' : 'Viewing'}
        </span>
      </div>

      {isEditing ? (
        <UserForm 
          user={user} // Pre-populates the form with server-fetched data
          onSave={handleSave} 
          onCancel={toggleEdit} 
        />
      ) : (
        <UserDisplay user={user} />
      )}

      {!isEditing && (
        <button 
          onClick={toggleEdit}
          style={{ 
            marginTop: '20px', 
            padding: '10px 20px', 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}