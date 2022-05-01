export const getCurrentAuth = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt");
  }
  return;
};
