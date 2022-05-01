import { rootRoute } from "./rootRoute.js";

export const rootCommentRoute = rootRoute + "/comments";
export const postNewComment = rootCommentRoute;
export const getAllComment = rootCommentRoute;

export const getOneCommentById = (id) => {
  return `${rootRoute}/${getAllComment}/${id}`;
};
export const deleteOneCommentById = (id) => {
  return `${rootRoute}/${getAllComment}/${id}`;
};
