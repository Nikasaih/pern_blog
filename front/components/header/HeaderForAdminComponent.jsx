import { HeaderLinkComponent } from "./HeaderLinkComponent.jsx"

export const HeaderForAdminComponent = () => {
  return (
    <>
      <HeaderLinkComponent href={"/admin/manage-user"} text={"Admin"} />
    </>
  )
}
