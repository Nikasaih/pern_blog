import Link from "next/link";
import { useContext } from "react";
import AppContext from "../AppContext.jsx";

export const HeaderLoggedComponent = () => {
  const { handleLogout } = useContext(AppContext);
  return (
    <>
      <Link href="/">
        <a onClick={handleLogout}>Logout</a>
      </Link>
    </>
  );
};
