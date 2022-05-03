import {
  banUserRequest,
  suspendUserRequest,
  unSuspendUserRequest,
} from "../../api/requests/userRequest.js"
import { MyAdminButton } from "../other/MyAdminButton.jsx"

export const ManageUserComponent = ({
  id,
  email,
  role,
  suspendedAt,
  suspensionAmount,
  supensionDuration,
  handleUpdateUsers,
}) => {
  const handleUnSuspendUser = async () => {
    await unSuspendUserRequest(id)
    await handleUpdateUsers()
  }

  const handleSuspendUser = async () => {
    await suspendUserRequest(id)
    await handleUpdateUsers()
  }

  const handleBanUser = async () => {
    await banUserRequest(id)
    await handleUpdateUsers()
  }
  return (
    <div className="mt-5">
      <h2>{email}</h2>
      <p>{role}</p>
      <p>suspensionAmount {suspensionAmount}</p>

      {suspendedAt && (
        <>
          <p>suspendedAt {suspendedAt}</p>
          <p>supensionDuration {supensionDuration}</p>
        </>
      )}

      <div className="flex flex-row">
        {suspendedAt && (
          <MyAdminButton
            onClick={handleUnSuspendUser}
            disabled={false}
            text={"UnSuspend"}
            colorClass={"bg-indigo-600 hover:bg-indigo-700"}
          />
        )}
        {!suspendedAt && (
          <MyAdminButton
            onClick={handleSuspendUser}
            disabled={false}
            text={"Suspend"}
            colorClass={"bg-indigo-600 hover:bg-indigo-700"}
          />
        )}
        <MyAdminButton
          onClick={handleBanUser}
          disabled={false}
          text={"Ban user"}
          colorClass={"bg-red-600 hover:bg-red-700"}
        />
      </div>
    </div>
  )
}
