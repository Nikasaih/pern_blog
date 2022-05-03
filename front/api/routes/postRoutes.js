import { rootRoute } from "./rootRoute.js";

export const rootPostRoute = rootRoute + "/posts";
export const createNewPostRoute = rootPostRoute;
export const getAllPostRoute = rootPostRoute;

export const getOnePostByIdRoute = (id) => {
  return `${rootPostRoute}/${id}`;
};
export const deleteOnePostByIdRoute = (id) => {
  return `${rootPostRoute}/${id}`;
};

export const publishById = (id) => {
  return `${rootPostRoute}/publishById/${id}`;
};
