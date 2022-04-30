import { UserRole } from "../utils/userRoleEnum.js";

const hasBasicRole = (role) => {
  return role === UserRole.BASIC;
};

const hasAuthorRole = (role) => {
  return role === UserRole.AUTHOR;
};

const hasAdminRole = (role) => {
  return role === UserRole.ADMIN;
};

export const hasBasicAuthority = (userRole) => {
  if (
    hasBasicRole(userRole) ||
    hasAuthorRole(userRole) ||
    hasAdminRole(userRole)
  ) {
    return true;
  }

  return false;
};

export const hasAuthorAuthority = (userRole) => {
  if (hasAuthorRole(userRole) || hasAdminRole(userRole)) {
    return true;
  }

  return false;
};

export const hasAdminAuthority = (userRole) => {
  if (hasAdminRole(userRole)) {
    return true;
  }

  return false;
};
