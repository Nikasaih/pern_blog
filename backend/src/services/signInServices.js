import { UserModel } from "../models/modelsclass/usermodel.js";
import { UserNotFoundExc } from "../utils/exception/UserNotFoundExc.js";
import { generateJwt } from "./jwtServices.js";
import { hashPassword, validatePassword } from "./pwHashServices.js";

export const signIn = async ({ email, password }) => {
  const [exist, user] = await UserExist(email);
  if (!exist) {
    throw UserNotFoundExc();
  }
  if (!validatePassword(user, password)) {
    throw "connection error maybe email or password are not valid";
  }

  return generateJwt(user);
};

const UserExist = async (userEmail) => {
  const user = await UserModel.findByEmail(userEmail);
  if (user) {
    return [true, user];
  }
  return false;
};
