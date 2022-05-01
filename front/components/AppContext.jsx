import { createContext, useEffect, useState } from "react";
import { getCurrentAuth, parseJwt } from "../api/utils/utils.js";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [authData, setAuthData] = useState();

  const getLog = (current) => {
    setAuthData(parseJwt(current));
  };

  const logout = () => {
    setAuthData(null);
  };

  useEffect(() => {
    getLog(getCurrentAuth());
  }, []);
  return <AppContext.Provider {...props} value={{ authData, logout }} />;
};

export default AppContext;
