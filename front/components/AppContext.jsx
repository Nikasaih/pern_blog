import { createContext, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [auth, setAuth] = useState();

  return <AppContext.Provider {...props} value={{ auth, setAuth }} />;
};

export default AppContext;
