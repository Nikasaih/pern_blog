import Link from "next/link";
import { useContext } from "react";
import AppContext from "../AppContext.jsx";
import { HeaderLoggedComponent } from "./HeaderLoggedComponent.jsx";
import { HeaderUnLoggedComponent } from "./HeaderUnLoggedComponent.jsx";
export const HeaderComponent = () => {
  const { authData } = useContext(AppContext);
  return (
    <header>
      <Link href="/">
        <a>Tous les Posts</a>
      </Link>

      {!authData && <HeaderUnLoggedComponent />}

      {authData && <HeaderLoggedComponent />}
    </header>
  );
};
