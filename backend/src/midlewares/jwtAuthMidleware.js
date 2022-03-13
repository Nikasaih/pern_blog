import { validateJwt } from "../services/jwtServices.js";

export const jwtAuthMidleware = (req, res, next) => {
  const {
    headers: { authentication },
  } = req;
  if (!authentication) {
    next();
    return;
  }
  try {
    req.auth = validateJwt(authentication);
    next();
  } catch (e) {
    res.status(403).send(e);
  }
};
