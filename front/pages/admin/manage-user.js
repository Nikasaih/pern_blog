import { useContext, useEffect, useState } from "react"
import { getAllUserRequest } from "../../api/requests/userRequest.js"
import { hasAdminAuthority } from "../../api/utils/hasAuthorityServices.js"
import { ManageUserComponent } from "../../components/admin/ManageUserComponent.jsx"
import { AppContext } from "../../components/AppContext.jsx"

const ManageUser = () => {
  const { authData } = useContext(AppContext)

  const [users, setUsers] = useState()

  const loadUsers = async (asyncFt) => {
    if (asyncFt) {
      await asyncFt()
    }
    const response = await getAllUserRequest()
    setUsers(response.data)
  }

  useEffect(() => {
    if (typeof authData === undefined) {
      return
    }
    if (!hasAdminAuthority(authData)) {
      return
    }
    loadUsers()
  }, [authData])

  return (
    <div>
      {users &&
        users.map((user, index) => {
          return (
            <ManageUserComponent
              key={index}
              email={user.email}
              role={user.role}
              suspendedAt={user.suspendedAt}
              suspensionAmount={user.suspensionAmount}
              supensionDuration={user.supensionDuration}
              id={user.id}
              handleUpdateUsers={loadUsers}
            />
          )
        })}
    </div>
  )
}

export default ManageUser
