import React, { useContext } from "react";
import UsersContext from "../store/users-context";
import User from "./User";

const Users = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;
