'use client'; 

import { useState } from 'react';
import { User } from "@/shared/types"; 

interface UserFormProps {
  user?: User; 
  onSave: (formData: User) => void;
  onCancel: () => void;
}

export default function UserForm({ user, onSave, onCancel }: UserFormProps) {
  // Initialize state with prop data (for edit) or empty values (for create)
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || '',
    phone: user?.phone || '',
    website: user?.website || '',
    // Exclude the 'id' field from the editable state
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since we are not doing the save logic yet, we call onSave 
    // with the user ID if present (for UPDATE)
    const finalData = user ? { ...formData, id: user.id } as User : formData as User; 
    onSave(finalData);
  };

  const formTitle = user ? `Edit User: ${user.name}` : 'Create New User';

  return (
    <form onSubmit={handleSubmit} style={{ 
      border: '2px solid #f97316', 
      padding: '25px', 
      borderRadius: '8px', 
      backgroundColor: '#fff7ed',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ea580c' }}>
        {formTitle}
      </h2>

      {/* Form Fields */}
      {['name', 'username', 'email', 'phone', 'website'].map(key => (
        <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontWeight: '600', marginBottom: '5px', textTransform: 'capitalize' }}>
            {key}:
          </label>
          <input
            type="text"
            name={key}
            value={formData[key as keyof typeof formData]}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #fdba74', borderRadius: '4px' }}
          />
        </div>
      ))}

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button 
          type="button" 
          onClick={onCancel}
          style={{ padding: '10px 20px', backgroundColor: '#9ca3af', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Cancel
        </button>
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}