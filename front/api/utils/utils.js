export const getCurrentAuth = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt");
  }
  return;
};

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
