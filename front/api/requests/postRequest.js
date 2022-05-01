import axios from "axios";
import { getAllPostRoute, getOnePostByIdRoute } from "../routes/postRoutes.js";

export const getAllPostRequest = () => {
  return axios.get(getAllPostRoute);
};

export const getPostByIdRequest = (id) => {
  return axios.get(getOnePostByIdRoute(id));
};
