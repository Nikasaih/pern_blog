import axios from "axios";
import {
  deleteOneCommentByIdRoute,
  getAllCommentRoute,
  getOneCommentByIdRoute,
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
