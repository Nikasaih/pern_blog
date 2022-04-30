export const rootCommentRoute = "/comments";
export const postNewComment = rootCommentRoute;
export const getAllComment = rootCommentRoute;

export const getOneCommentById = (id) => {
  return `${getAllComment}/${id}`;
};
export const deleteOneCommentById = (id) => {
  return `${getAllComment}/${id}`;
};
