import React, { useContext, useState, useCallback } from "react";
import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const usersContext = React.createContext();

export const ProvideUsers = ({ children }) => {
  const data = useProvideUsers();
  return <usersContext.Provider value={data}>{children}</usersContext.Provider>;
};

export const useUsers = () => {
  return useContext(usersContext);
};

export const useProvideUsers = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = useCallback((onSuccess) => {
    instance
      .get("users")
      .then((response) => {
        setUsers(response.data);
        onSuccess();
      })
      .catch((error) => onSuccess());
  }, []);

  return {
    users,
    fetchUsers,
  };
};
