import jsonwebtoken from "jsonwebtoken";

export const generateJwt = (userId) => {
  return jsonwebtoken.sign(
    { payload: { userId } },
    config.security.session.secret,
    { expiresIn: config.security.session.expiresIn }
  );
};

export const validateJwt = (authentication) => {
  const { payload } = jsonwebtoken.verify(
    authentication,
    config.security.session.secret
  );

  return payload;
};
