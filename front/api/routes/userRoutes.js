export const register = "/register";
export const signIn = "/sign-in";
export const deleteMyAccount = "/delete-my-account";

export const suspendUserById = (id) => {
  return `/suspend-user/${id}`;
};
export const unSuspendUserById = (id) => {
  return `/unsuspend-user/${id}`;
};
export const banUserById = (id) => {
  return `/ban-user/${id}`;
};
