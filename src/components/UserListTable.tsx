import { User } from "@/shared/types"; 
import UserRowLink from "./UserRowLink";

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
        {users.map((user) => {
            console.log(user);
            return(
          <UserRowLink key={user.id} user={user}>
            <td style={{ padding: '12px 15px' }}>{user.name}</td>
            <td style={{ padding: '12px 15px' }}>{user.username}</td>
            <td style={{ padding: '12px 15px' }}>{user.email}</td>
            <td style={{ padding: '12px 15px' }}>
              View Detail
            </td>
          </UserRowLink>)
        })}
      </tbody>
    </table>
  );
}