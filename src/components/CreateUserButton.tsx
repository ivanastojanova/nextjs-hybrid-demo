'use client';

interface CreateUserButtonProps {
  onClick: () => void;
}

export default function CreateUserButton({ onClick }: CreateUserButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#10b981',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      ➕ Create New User
    </button>
  );
}
