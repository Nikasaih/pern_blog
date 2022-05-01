import { getAllUserRequest } from "../../api/requests/userRequest.js";
import { ManageUserComponent } from "../../components/admin/ManageUserComponent.jsx";
const ManageUser = () => {
  const [users, setUsers] = useState();

  const loadUsers = async () => {
    const response = await getAllUserRequest();
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <ManageUserComponent
              email={user.email}
              role={user.role}
              suspendedAt={user.suspendedAt}
              suspensionAmount={user.suspensionAmount}
              supensionDuration={user.supensionDuration}
              id={user.id}
            />
          );
        })}
    </div>
  );
};

export default ManageUser;
