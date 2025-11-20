'use client'; 

import { useState } from 'react';
import { User } from "@/shared/types";
import UserDisplay from "./UserDisplay"; 
import UserForm from "./UserForm";

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

const handleSave = async (updatedUser: User) => {
    setLoading(true);
    setMessage('Saving data via Server Action...');

    try {
      const result = await updateFn(updatedUser); 

      // Update the display data with the returned data
      setCurrentData(result.updatedData); 
      setMessage(result.message);
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      setMessage('Error saving data.');
      console.error(error);
    } finally {
      setLoading(false);
    }
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

      <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>

      {isEditing ? (
        <UserForm 
          user={currentData} 
          onSave={handleSave} 
          onCancel={toggleEdit} 
          isSaving={loading}
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
            width: '100%'
          }}
        >
            {loading ? 'Processing...' : 'Edit Profile'}
        </button>
      )}
    </div>
  );
}