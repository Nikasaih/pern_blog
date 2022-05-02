import { rootRoute } from "./rootRoute.js";

export const rootCommentRoute = rootRoute + "/comments";
export const createNewCommentRoute = rootCommentRoute;
export const getAllCommentRoute = rootCommentRoute;

export const getOneCommentByIdRoute = (id) => {
  return `${rootRoute}/${getAllCommentRoute}/${id}`;
};
export const deleteOneCommentByIdRoute = (id) => {
  return `${rootRoute}/${getAllCommentRoute}/${id}`;
};

export const getCommentsByPostRoute = (postId) => {
  return `${rootCommentRoute}/by-post/${postId}`;
};
