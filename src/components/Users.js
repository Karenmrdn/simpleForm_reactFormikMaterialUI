import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import * as axios from "axios";
import Loader from "../assets/svg/loader";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(
    () =>
      instance.get("users").then((response) => {
        setUsers(response.data);
        console.log(response.data);
      }),
    []
  );

  return (
    <>
      <Loader />
      {users.map((user) => (
        <Typography key={user.id}>{user.name}</Typography>
      ))}
    </>
  );
};

export default Users;
