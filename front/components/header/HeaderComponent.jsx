import Link from "next/link"
import { useContext } from "react"
import {
  hasAdminAuthority,
  hasAuthorAuthority,
} from "../../../backend/src/services/hasAuthorityServices.js"
import AppContext from "../AppContext.jsx"
import { HeaderForAdminComponent } from "./HeaderForAdminComponent.jsx"
import { HeaderForAuthorComponent } from "./HeaderForAuthorComponent.jsx"
import { HeaderLinkComponent } from "./HeaderLinkComponent.jsx"
import { HeaderLoggedComponent } from "./HeaderLoggedComponent.jsx"
import { HeaderUnLoggedComponent } from "./HeaderUnLoggedComponent.jsx"

export const HeaderComponent = () => {
  const { authData } = useContext(AppContext)
  return (
    <header>
      <HeaderLinkComponent href={"/"} text={"Tous les Posts"} />

      {authData && hasAuthorAuthority(authData.payload.role) && (
        <HeaderForAuthorComponent />
      )}

      {authData && hasAdminAuthority(authData.payload.role) && (
        <HeaderForAdminComponent />
      )}

      {!authData && <HeaderUnLoggedComponent />}

      {authData && <HeaderLoggedComponent />}
    </header>
  )
}
