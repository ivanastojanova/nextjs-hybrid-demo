
'use client'; 

import { useState } from 'react';

interface ClientGreetingProps {
  initialUserName: string;
}

const ClientGreeting = ({ initialUserName }: ClientGreetingProps) => {
  const [name, setName] = useState<string>(initialUserName);

  const handleClick = () => {
    setName('Interactive User');
  };

  return (
    <div style={{ border: '1px solid blue', padding: '20px', margin: '20px 0' }}>
      <h2>Client Component (Interactive)</h2>
      <p>Hello, **{name}**! Click the button to change the name locally.</p>
      
      <button onClick={handleClick} style={{ padding: '8px 16px', border: '1px solid black' }}>
        Change Name
      </button>
      
      <p style={{ fontSize: '0.8em', marginTop: '10px' }}>
        This component and its logic are downloaded and run in the browser.
      </p>
    </div>
  );
}

export default ClientGreeting;