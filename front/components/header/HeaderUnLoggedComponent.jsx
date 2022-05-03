import Link from "next/link"
import { HeaderLinkComponent } from "./HeaderLinkComponent.jsx"

export const HeaderUnLoggedComponent = () => {
  return (
    <>
      <HeaderLinkComponent href={"/register"} text={"Register"} />
      <HeaderLinkComponent href={"/sign-in"} text={"Sign-in"} />
    </>
  )
}
