import { User } from "@/shared/types"; 

interface UserDisplayProps {
  user: User;
}

export default function UserDisplay({ user }: UserDisplayProps) {
  return (
    <div style={{ 
      border: '2px solid #3b82f6', 
      padding: '25px', 
      borderRadius: '8px', 
      backgroundColor: '#eff6ff',
      maxWidth: '500px'
    }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', color: '#1d4ed8' }}>
        User Profile (Server Rendered)
      </h2>
      <div style={{ marginBottom: '10px' }}>
        <strong>Name:</strong> {user.name}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Username:</strong> {user.username}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Email:</strong> {user.email}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Phone:</strong> {user.phone}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Website:</strong> {user.website}
      </div>
    </div>
  );
}