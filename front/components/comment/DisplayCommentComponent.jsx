import { useContext } from "react"
import { AppContext } from "../AppContext.jsx"

export const DisplayCommentComponent = ({
  id: commentId,
  content,
  writedAt,
  authorId,
  className,
}) => {
  const { authData } = useContext(AppContext)

  return (
    <div className={className}>
      <p>{content}</p>
      <p>
        <small>{writedAt}</small>
      </p>
      <p>{authorId}</p>
      {authData && authData.id === authorId ? (
        <button onClick={deleteCommentByIdRequest(commentId)}>Delete</button>
      ) : null}
    </div>
  )
}
