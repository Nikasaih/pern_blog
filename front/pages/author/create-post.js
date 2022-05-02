import { hasAuthorAuthority } from "../../api/utils/hasAuthorityServices.js";
import { CreatePostComponent } from "../../components/post/CreatePostComponent.jsx";

const CreatePost = () => {
  const { authData } = useContext(AppContext);

  useEffect(() => {
    if (typeof authData === undefined) {
      return;
    }
    if (!hasAuthorAuthority(authData)) {
      return;
    }
  }, [authData]);
  return (
    <div>
      <CreatePostComponent />
    </div>
  );
};

export default CreatePost;
