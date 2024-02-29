import { User } from "../data/data";

interface userProps {
  users: User[];
}

export default function UserTable({ users }: userProps) {
  return (
    <table className="simple-table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>ID</td>
          <td>Status:</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.id}</td>
            <td>{user.isActive ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
