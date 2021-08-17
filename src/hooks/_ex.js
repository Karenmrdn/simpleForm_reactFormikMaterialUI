import React, { useContext, useState, createContext } from "react";
import { signIn, signUp, verify } from "../api/index";

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
                  {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

export const useProvideAuth = () => {
  const localUser = localStorage.getItem("user");
  const [user, setUser] = useState(localUser && JSON.parse(localUser));
  const signin = (user, orgId, cb = () => {}) => {
    signIn(user, orgId)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res?.user));
        localStorage.setItem("auth-token", res?.auth?.token);
        localStorage.setItem("refresh-token", res?.auth?.refreshToken);
        setUser(res.user);
      })
      .catch((e) => {
        cb(e);
      });
  };
  const signout = (cb = () => {}) => {
    return fakeAuth.signout(() => {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("auth-token");
      localStorage.removeItem("refresh-token");
      cb();
    });
  };

  const signup = (user, orgId) => {
    signUp(user, orgId)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res?.user));
        localStorage.setItem("auth-token", res?.auth?.token);
        localStorage.setItem("refresh-token", res?.auth?.refreshToken);
        setUser(res.user);
      })
      .catch(console.log);
  };

  const verifyUser = (orgId, cb = () => {}) => {
    verify(orgId)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res?.user));
        setUser(res.user);
      })
      .catch((e) => {
        cb();
      });
  };
  return {
    user,
    signin,
    signup,
    signout,
    verifyUser,
  };
};
