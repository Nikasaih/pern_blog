import { rootRoute } from "../api/routes/rootRoute.js";

const registerFullRoute = rootRoute + register;
const signInFullRoute = rootRoute + signIn;

export const registerRequest = async ({ password, email, displayName }) => {
  return axios.post(registerFullRoute, { password, email, displayName });
};

export const signInRequest = async ({ email, password }) => {
  const response = await axios.post(signInFullRoute, { email, password });

  localStorage.setItem("jwt", response.data);
};
