import React, { useState, useEffect } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  const renderUsers = () => {
    if (error) {
      return <p>Error: {error}</p>;
    } else if (users.length === 0) {
      return <p>No users available</p>;
    } else {
      return (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>isPremium</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.ispremium ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      {renderUsers()}
    </div>
  );
};

export default UsersPage;
