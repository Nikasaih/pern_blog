export const Post = ({ title, content, publicatedAt, authorId }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <small>{publicatedAt}</small>
      </p>
      <p>{authorId}</p>
    </div>
  );
};
