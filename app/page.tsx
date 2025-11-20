// app/page.tsx (Server Component - default)

import { User } from "@/shared/types";
import ClientGreeting from "../src/components/ClientGreeting";
import ClientCounter from "../src/components/ClientCounter";
import StatusUpdaterForm from "@/src/components/StatusUpdaterForm";

async function getFakeUserData(): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user: User = await res.json();
  
  // Simulate a slow network to see the server delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return user;
}

// ⬅️ SERVER ACTION: Runs securely on the server
async function updateStatus(formData: FormData) {
  'use server';
  const status = formData.get('statusInput');
  console.log(`[SERVER LOG] Status updated to: ${status}`);
  // In a real app, update a database here
  return { success: true, newStatus: status };
}

export default async function HomePage() {
  const user: User = await getFakeUserData();

  return (
    <div style={{ padding: '40px', background: '#f0f0f0' }}>
      <h1>Server-Rendered Content</h1>
      <p>This component is rendered fully on the server.</p>
      
      <ClientGreeting initialUserName={user.name} />

      <p style={{ marginTop: '20px', color: 'gray' }}>
        Fetched from Server: **{user.username}**
      </p>

      <hr style={{ margin: '30px 0' }} />

    {/* ⬅️ Pass the Server Action function as a prop */}
    <StatusUpdaterForm updateFn={updateStatus} />

    <ClientCounter />
    </div>
  );
}