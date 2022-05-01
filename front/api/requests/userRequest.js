import {
  registerRoute,
  signInRoute,
  deleteMyAccountRoute,
  suspendUserByIdRoute,
  unSuspendUserByIdRoute,
  banUserByIdRoute,
  getAllUserRoute,
} from "../routes/userRoutes.js";
import axios from "axios";

export const registerRequest = async ({ password, email, displayName }) => {
  return axios.post(registerRoute, { password, email, displayName });
};

export const signInRequest = async ({ email, password }) => {
  const response = await axios.post(signInRoute, { email, password });
  localStorage.setItem("jwt", response.data);
  return response.data;
};

export const deleteMyAccountRequest = () => {
  return axios.delete(deleteMyAccountRoute);
};

export const suspendUserRequest = (id) => {
  const headers = { headers: { ...getAuthHeader() } };
  return axios.post(suspendUserByIdRoute(id), {}, headers);
};

export const unSuspendUserRequest = (id) => {
  const headers = { headers: { ...getAuthHeader() } };
  return axios.post(unSuspendUserByIdRoute(id), {}, headers);
};

export const banUserRequest = (id) => {
  const headers = { headers: { ...getAuthHeader() } };
  return axios.post(banUserByIdRoute(id), {}, headers);
};

export const getAllUserRequest = () => {
  const headers = { headers: { ...getAuthHeader() } };
  return axios.get(getAllUserRoute, {}, headers);
};

export const logoutRequest = () => {
  localStorage.setItem("jwt", null);
};
const getAuthHeader = () => {
  const auth = localStorage.getItem("jwt");
  if (!auth) {
    return;
  }
  return { authentication: auth };
};
