'use client';

import { useState } from 'react';

interface StatusUpdaterFormProps {
  updateFn: (
    formData: FormData,
  ) => Promise<{ success: boolean; newStatus: FormDataEntryValue | null }>;
}

export default function StatusUpdaterForm({ updateFn }: StatusUpdaterFormProps) {
  const [status, setStatus] = useState<string>('Ready');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (formData: FormData) => {
    setLoading(true);
    const result = await updateFn(formData);

    if (result.success) {
      setStatus(result.newStatus as string);
    }
    setLoading(false);
  };

  return (
    <div style={{ border: '1px solid orange', padding: '20px', margin: '20px 0' }}>
      <h3>Client Component: Server Action Trigger</h3>
      <p>Current Server Status (Updated via Server Action): **{status}**</p>

      <form action={handleFormSubmit}>
        <input
          type="text"
          name="statusInput"
          defaultValue="Working"
          disabled={loading}
          style={{ padding: '8px', marginRight: '10px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '8px 16px', background: loading ? '#ccc' : 'orange', color: 'white' }}
        >
          {loading ? 'Updating...' : 'Run Server Action'}
        </button>
      </form>

      <p style={{ fontSize: '0.8em', marginTop: '10px' }}>
        The button click runs `updateStatus` **on the server**.
      </p>
    </div>
  );
}
