import Link from "next/link"
import { useContext } from "react"
import AppContext from "../AppContext.jsx"
import { HeaderLinkComponent } from "./HeaderLinkComponent.jsx"

export const HeaderLoggedComponent = () => {
  const { handleLogout } = useContext(AppContext)
  return (
    <>
      <HeaderLinkComponent
        href={"/"}
        text={"Logout"}
        onClickAction={handleLogout}
      />
    </>
  )
}
