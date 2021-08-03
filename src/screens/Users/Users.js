import React, { useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import User from "./components/User";
import Loader from "../../assets/svg/Loader";

const Users = () => {
  const { users, fetchUsers } = useUsers();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers(() => setIsLoading(false));
  }, [fetchUsers]);

  return (
    <>
      {isLoading && <Loader style={{ margin: 20 }} />}
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;
