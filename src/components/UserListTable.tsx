import { User } from "@/shared/types"; 

interface UserListTableProps {
  users: User[];
}

export default function UserListTable({ users }: UserListTableProps) {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <table style={{ 
      width: '100%', 
      borderCollapse: 'collapse', 
      marginTop: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
    }}>
      <thead style={{ backgroundColor: '#1f2937', color: 'white' }}>
        <tr>
          <th style={{ padding: '12px 15px', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '12px 15px', textAlign: 'left' }}>Username</th>
          <th style={{ padding: '12px 15px', textAlign: 'left' }}>Email</th>
          <th style={{ padding: '12px 15px', textAlign: 'left' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id} style={{ 
            backgroundColor: index % 2 === 0 ? '#f9fafb' : '#ffffff',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <td style={{ padding: '12px 15px' }}>{user.name}</td>
            <td style={{ padding: '12px 15px' }}>{user.username}</td>
            <td style={{ padding: '12px 15px' }}>{user.email}</td>
            <td style={{ padding: '12px 15px' }}>
              <button style={{ 
                padding: '6px 12px', 
                backgroundColor: '#3b82f6', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}