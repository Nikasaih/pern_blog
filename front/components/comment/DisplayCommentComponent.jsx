import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

export const DisplayCommentComponent = ({
  id: commentId,
  content,
  writedAt,
  authorId,
}) => {
  const {
    authData: { id },
  } = useContext(AppContext);
  return (
    <div>
      <p>{content}</p>
      <p>
        <small>{writedAt}</small>
      </p>
      <p>{authorId}</p>
      {id === authorId ? (
        <button onClick={deleteCommentByIdRequest(commentId)}>Delete</button>
      ) : null}
    </div>
  );
};
