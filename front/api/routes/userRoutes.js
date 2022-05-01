import { rootRoute } from "./rootRoute.js";

export const registerRoute = rootRoute + "/register";
export const signInRoute = rootRoute + "/sign-in";
export const deleteMyAccountRoute = rootRoute + "/delete-my-account";

export const suspendUserById = (id) => {
  return `${rootRoute}/suspend-user/${id}`;
};
export const unSuspendUserById = (id) => {
  return `${rootRoute}/unsuspend-user/${id}`;
};
export const banUserById = (id) => {
  return `${rootRoute}/ban-user/${id}`;
};
