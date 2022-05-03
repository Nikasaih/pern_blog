import Link from "next/link"
import { HeaderLinkComponent } from "./HeaderLinkComponent.jsx"

export const HeaderForAuthorComponent = () => {
  return (
    <>
      <HeaderLinkComponent
        href={"/author/create-post"}
        text={"Create new post"}
      />
    </>
  )
}
