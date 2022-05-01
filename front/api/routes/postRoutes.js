import { rootRoute } from "./rootRoute.js";

export const rootPostRoute = rootRoute + "/posts";
export const postNewPostRoute = rootPostRoute;
export const getAllPostRoute = rootPostRoute;

export const getOnePostByIdRoute = (id) => {
  return `${getAllPostRoute}/${id}`;
};
export const deleteOnePostByIdRoute = (id) => {
  return `${getAllPostRoute}/${id}`;
};
