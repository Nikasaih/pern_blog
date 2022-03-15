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

export const hasBasicAuthority = (user) => {
  const { role } = user;

  if (hasBasicRole(role) || hasAuthorRole(role) || hasAdminRole(role)) {
    return true;
  }

  return false;
};

export const hasAuthorAuthority = (user) => {
  const { role } = user;

  if (hasAuthorRole(role) || hasAdminRole(role)) {
    return true;
  }

  return false;
};

export const hasAdminAuthority = (user) => {
  const { role } = user;

  if (hasAdminRole(role)) {
    return true;
  }

  return false;
};
