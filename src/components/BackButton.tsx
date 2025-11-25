'use client';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
  buttonText?: string;
}

export default function BackButton({ buttonText = '← Go Back' }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="button"
      style={{
        padding: '8px 16px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}
    >
      {buttonText}
    </button>
  );
}
