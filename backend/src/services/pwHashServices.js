import { randomBytes } from "crypto";
import { pbkdf2Sync } from "crypto";
import config from "../config.js";
import { UserModel } from "../models/modelsclass/usermodel.js";

const { iterationNumber, characterNumber, digestAlgo, pepper } =
  config.security.password;

export const hashPassword = (
  rawPassword,
  salt = randomBytes(256).toString("hex")
) => {
  const passwordHashed = pbkdf2Sync(
    rawPassword,
    salt,
    iterationNumber,
    characterNumber,
    digestAlgo
  ).toString("hex");
  return [passwordHashed, salt];
};

export const validatePassword = async (userEmail, passwordSubmit) => {
  const user = await UserModel.findByEmail(userEmail);
  if (!user) {
    return false;
  }

  return user.passwordHash === hashPassword(passwordSubmit, user.passwordSalt);
};
