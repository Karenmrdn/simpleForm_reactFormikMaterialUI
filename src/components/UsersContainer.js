import React, { useEffect, useState } from "react";
import * as axios from "axios";
import Loader from "../assets/svg/Loader";
import Users from "./Users";
import UsersContext from "../store/users-context";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    instance.get("users").then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    });
  }, []);

  const usersContext = {
    users,
  };

  return (
    <>
      {isLoading && <Loader />}
      <UsersContext.Provider value={usersContext}>
        <Users />
      </UsersContext.Provider>
    </>
  );
};

export default UsersContainer;
