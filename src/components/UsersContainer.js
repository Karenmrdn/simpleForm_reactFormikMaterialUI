import React from "react";
import Users from "./Users";
import { ProvideUsers } from "../hooks/use-users";

const UsersContainer = () => {
  return (
    <>
      <ProvideUsers>
        <Users />
      </ProvideUsers>
    </>
  );
};

export default UsersContainer;
