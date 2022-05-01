import { rootRoute } from "./rootRoute.js";

export const registerRoute = rootRoute + "/register";
export const signInRoute = rootRoute + "/sign-in";
export const deleteMyAccountRoute = rootRoute + "/delete-my-account";

export const suspendUserByIdRoute = (id) => {
  return `${rootRoute}/suspend-user/${id}`;
};
export const unSuspendUserByIdRoute = (id) => {
  return `${rootRoute}/unsuspend-user/${id}`;
};
export const banUserByIdRoute = (id) => {
  return `${rootRoute}/ban-user/${id}`;
};
