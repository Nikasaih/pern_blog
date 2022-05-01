export const rootPostRoute = "/posts";
export const postNewPost = rootPostRoute;
export const getAllPost = rootPostRoute;

export const getOnePostById = (id) => {
  return `${getAllPost}/${id}`;
};
export const deleteOnePostById = (id) => {
  return `${getAllPost}/${id}`;
};
