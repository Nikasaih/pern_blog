import { createContext, useEffect, useState } from "react";
import { logoutRequest } from "../api/requests/userRequest.js";
import { getCurrentAuth, parseJwt } from "../api/utils/utils.js";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [authData, setAuthData] = useState();

  const getLog = (current) => {
    if (!current) {
      setAuthData(null);
      return;
    }
    setAuthData(parseJwt(current));
  };

  const handleLogout = () => {
    setAuthData(null);
    logoutRequest();
  };

  const handleLogin = (jwt) => {
    setAuthData(parseJwt(jwt));
  };

  useEffect(() => {
    getLog(getCurrentAuth());
  }, []);
  return (
    <AppContext.Provider
      {...props}
      value={{ authData, handleLogout, handleLogin }}
    />
  );
};

export default AppContext;
