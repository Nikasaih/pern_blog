import {
  banUserRequest,
  suspendUserRequest,
  unSuspendUserRequest,
} from "../../api/requests/userRequest.js";

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
    await unSuspendUserRequest(id);
    await handleUpdateUsers();
  };

  const handleSuspendUser = async () => {
    await suspendUserRequest(id);
    await handleUpdateUsers();
  };

  const handleBanUser = async () => {
    await banUserRequest(id);
    await handleUpdateUsers();
  };
  return (
    <div>
      <h2>{email}</h2>
      <p>{role}</p>
      <p>suspensionAmount {suspensionAmount}</p>

      {suspendedAt && (
        <>
          <p>suspendedAt {suspendedAt}</p>
          <p>supensionDuration {supensionDuration}</p>
          <button onClick={handleUnSuspendUser}>UnSuspend</button>
        </>
      )}

      {!suspendedAt && <button onClick={handleSuspendUser}>Suspend</button>}
      <button onClick={handleBanUser}>Ban user</button>
    </div>
  );
};
