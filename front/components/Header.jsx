import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { logoutRequest } from "../api/requests/userRequest.js";
import { getCurrentAuth } from "../api/utils/utils.js";
import AppContext from "./AppContext.jsx";
export const Header = () => {
  const { auth, setAuth } = useContext(AppContext);

  const unLoggedOptions = () => {
    return (
      <>
        <Link href="/register">
          <a>Register</a>
        </Link>
        <Link href="/sign-in">
          <a>Login</a>
        </Link>
      </>
    );
  };
  const loggedOptions = () => {
    const handleLogout = () => {
      logoutRequest();
      setAuth(null);
    };
    return (
      <>
        <Link href="/">
          <a onClick={handleLogout}>Logout</a>
        </Link>
      </>
    );
  };

  useEffect(() => {
    setAuth(getCurrentAuth());
  }, []);

  return (
    <header>
      <Link href="/">
        <a>Tous les Posts</a>
      </Link>

      {!auth && unLoggedOptions()}

      {auth && loggedOptions()}
    </header>
  );
};
