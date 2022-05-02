import { UserRole } from "./userRoleEnum.js";
import Router from "next/router";

const hasBasicRole = (role) => {
  return role === UserRole.BASIC;
};

const hasAuthorRole = (role) => {
  return role === UserRole.AUTHOR;
};

const hasAdminRole = (role) => {
  return role === UserRole.ADMIN;
};

export const hasBasicAuthority = (auth) => {
  if (!auth) {
    Router.push("/sign-in");
    return false;
  }

  if (
    hasBasicRole(auth.role) ||
    hasAuthorRole(auth.role) ||
    hasAdminRole(auth.role)
  ) {
    return true;
  }

  Router.push("/");
  return false;
};

export const hasAuthorAuthority = (auth) => {
  if (!auth) {
    Router.push("/sign-in");
    return false;
  }
  if (hasAdminRole(auth.payload.role) || hasAuthorRole(auth.payload.role)) {
    return true;
  }
  Router.push("/");
  return false;
};

export const hasAdminAuthority = (auth) => {
  if (!auth) {
    Router.push("/sign-in");
    return false;
  }
  if (hasAdminRole(auth.payload.role)) {
    return true;
  }
  Router.push("/");
  return false;
};
