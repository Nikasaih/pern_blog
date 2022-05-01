import axios from "axios";
import {
  deleteOnePostByIdRoute,
  getAllPostRoute,
  getOnePostByIdRoute,
  createNewPostRoute,
} from "../routes/postRoutes.js";
import { getAuthHeader } from "./userRequest.js";

export const getAllPostRequest = () => {
  return axios.get(getAllPostRoute);
};

export const getPostByIdRequest = (id) => {
  return axios.get(getOnePostByIdRoute(id));
};

export const deletePostByIdRequest = (id) => {
  return axios.delete(deleteOnePostByIdRoute(id));
};

export const createNewPostRequest = ({ title, content, isPublish }) => {
  const headers = getAuthHeader();
  return axios.post(
    createNewPostRoute,
    {
      title,
      content,
      isPublish,
      authorId,
    },
    headers
  );
};
