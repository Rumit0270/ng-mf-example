import React from "react";

import "./UserList.css";

export interface IUser {
  name: string;
  email: string;
}

export interface IUserListProps {
  users: IUser[];
  onClick: (user: IUser) => void;
}

export const UserList: React.FunctionComponent<IUserListProps> = ({
  users,
  onClick,
}) => {
  return (
    <>
      <h1>Users</h1>
      {users.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => onClick(user)}>Log</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No users</div>
      )}{" "}
    </>
  );
};
