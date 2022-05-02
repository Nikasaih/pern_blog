import Link from "next/link";
import { useContext } from "react";
import {
  hasAdminAuthority,
  hasAuthorAuthority,
} from "../../../backend/src/services/hasAuthorityServices.js";
import AppContext from "../AppContext.jsx";
import { HeaderForAdminComponent } from "./HeaderForAdminComponent.jsx";
import { HeaderForAuthorComponent } from "./HeaderForAuthorComponent.jsx";
import { HeaderLoggedComponent } from "./HeaderLoggedComponent.jsx";
import { HeaderUnLoggedComponent } from "./HeaderUnLoggedComponent.jsx";
export const HeaderComponent = () => {
  const { authData } = useContext(AppContext);
  return (
    <header>
      <Link href="/">
        <a>||Tous les Posts ||</a>
      </Link>

      {!authData && <HeaderUnLoggedComponent />}

      {authData && <HeaderLoggedComponent />}

      {authData && hasAuthorAuthority(authData.payload.role) && (
        <HeaderForAuthorComponent />
      )}

      {authData && hasAdminAuthority(authData.payload.role) && (
        <HeaderForAdminComponent />
      )}
    </header>
  );
};
