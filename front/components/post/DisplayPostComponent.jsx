export const DisplayPostComponent = ({
  title,
  content,
  publicatedAt,
  authorId,
}) => {
  return (
    <div className="pl-5 pt-5">
      <div className="flex flex-row">
        <h2 className="text-2xl">{title}</h2>
        <small className="pl-3">{publicatedAt}</small>
      </div>
      <p>{content}</p>
      <p>author : {authorId}</p>
    </div>
  )
}
