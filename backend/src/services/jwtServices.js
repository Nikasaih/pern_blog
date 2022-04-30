import jsonwebtoken from "jsonwebtoken";
import config from "../config.js";

export const generateJwt = (user) => {
  const { displayName, role, id } = user;
  return jsonwebtoken.sign(
    { payload: { displayName, role, id } },
    config.security.session.jwtSecret,
    { expiresIn: config.security.session.expiresIn }
  );
};

export const validateJwt = (authentication) => {
  const { payload } = jsonwebtoken.verify(
    authentication,
    config.security.session.jwtSecret
  );

  return payload;
};
