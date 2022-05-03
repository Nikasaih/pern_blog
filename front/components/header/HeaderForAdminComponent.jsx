import Link from "next/link"

export const HeaderForAdminComponent = () => {
  return (
    <>
      <HeaderLinkComponent href={"/admin/manage-user"} text={"Admin"} />
    </>
  )
}
