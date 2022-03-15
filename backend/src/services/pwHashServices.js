import { pbkdf2Sync, randomBytes } from "crypto";
import config from "../config.js";

const { iterationNumber, characterNumber, digestAlgo, pepper } =
  config.security.password;

export const hashPassword = (
  rawPassword,
  salt = randomBytes(256).toString("hex")
) => {
  const passwordHashed = pbkdf2Sync(
    rawPassword,
    salt + pepper,
    iterationNumber,
    characterNumber,
    digestAlgo
  ).toString("hex");
  return [passwordHashed, salt];
};

export const validatePassword = async (user, passwordSubmit) => {
  return user.passwordHash === hashPassword(passwordSubmit, user.passwordSalt);
};
