import { UserModel } from "../models/modelsClass/userModel.js";
import { EmailUnavailableExc } from "../utils/exception/EmailUnavailableExc.js";
import { UserRole } from "../utils/userRoleEnum.js";
import { hashPassword } from "./pwHashServices.js";

export const register = async ({ email, displayName, password }) => {
  if (await UserModel.findByEmail(email)) {
    throw EmailUnavailableExc();
  }

  const [passwordHashed, passwordSalt] = hashPassword(password);
  const user = {
    email,
    passwordHash: passwordHashed,
    passwordSalt,
    role: UserRole.BASIC,
    hasConfirmEmail: false,
    displayName,
    suspensionAmount: 0,
  };

  await UserModel.registerUser(user);
};
