import {
  banUserRequest,
  unSuspendUserRequest,
} from "../../api/requests/userRequest.js";

const ManageUserComponent = ({
  id,
  email,
  role,
  suspendedAt,
  suspensionAmount,
  supensionDuration,
}) => {
  return (
    <div>
      <h2>{email}</h2>
      <p>{role}</p>
      <p>suspensionAmount {suspensionAmount}</p>

      {suspendedAt && (
        <>
          <p>suspendedAt {suspendedAt}</p>
          <p>supensionDuration {supensionDuration}</p>
          <button
            onClick={() => {
              unSuspendUserRequest(id);
            }}
          >
            UnSuspend
          </button>
        </>
      )}
      <button onClick={unSuspendUserRequest(id)}>Suspend</button>
      <button
        onClick={() => {
          banUserRequest(id);
        }}
      ></button>
    </div>
  );
};
