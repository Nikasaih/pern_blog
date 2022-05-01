import Router from "next/router";
import { UserRole } from "./userRoleEnum.js";

export const getCurrentAuth = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt");
  }
  return;
};

export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const hasAdminAuthority = (auth) => {
  if (!auth) {
    Router.push("/sign-in");
    return false;
  }
  if (auth.role !== UserRole.ADMIN) {
    Router.push("/");
    return false;
  }
  return true;
};
