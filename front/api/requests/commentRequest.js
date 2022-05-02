import axios from "axios";
import {
  createNewCommentRoute,
  deleteOneCommentByIdRoute,
  getAllCommentRoute,
  getOneCommentByIdRoute,
  getCommentsByPostRoute,
} from "../routes/commentRoutes.js";

export const getAllCommentRequest = () => {
  return axios.get(getAllCommentRoute);
};

export const getCommentByIdRequest = (id) => {
  return axios.get(getOneCommentByIdRoute(id));
};

export const deleteCommentByIdRequest = (id) => {
  return axios.delete(deleteOneCommentByIdRoute(id));
};

export const createNewCommentRequest = ({ postId, content, authorId }) => {
  return axios.post(createNewCommentRoute, {
    postId,
    content,
    authorId,
  });
};

export const getCommentsByPostRequest = (postId) => {
  return axios.get(getCommentsByPostRoute(postId));
};
