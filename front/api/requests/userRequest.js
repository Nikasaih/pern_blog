import { registerRoute, signInRoute } from "../routes/userRoutes.js";
import axios from "axios";

export const registerRequest = async ({ password, email, displayName }) => {
  return axios.post(registerRoute, { password, email, displayName });
};

export const signInRequest = async ({ email, password }) => {
  const response = await axios.post(signInRoute, { email, password });
  localStorage.setItem("jwt", response.data);
};
