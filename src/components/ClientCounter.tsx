'use client'; 
import { useState } from 'react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid gray', padding: '15px', marginTop: '15px' }}>
      <h3>Client Component: Counter</h3>
      <p>Count: **{count}**</p>
      <button onClick={() => setCount(count + 1)} style={{ border: '1px solid gray', padding: '5px', margin: '5px' }}>
        Increment
      </button>
    </div>
  );
}