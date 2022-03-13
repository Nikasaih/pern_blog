import { Model } from "objection";
import { generateJwt } from "../../services/jwtServices.js";
import {
  hashPassword,
  validatePassword,
} from "../../services/pwHashServices.js";
import { CredentialNotMatchExc } from "../../utils/exception/CredentialNotMatchExc.js";
import { EmailUnavailableExc } from "../../utils/exception/EmailUnavailableExc.js";
import { UserNotFoundExc } from "../../utils/exception/UserNotFoundExc.js";
import { UserRole } from "../../utils/userRoleEnum.js";
const defaultRegistration = {
  role: UserRole.BASIC,
  hasConfirmEmail: false,
  suspensionAmount: 0,
};

export class UserModel extends Model {
  static get tableName() {
    return "users";
  }

  static findByEmail(email) {
    return UserModel.query().findOne({ email });
  }

  static async getUserIfExist(userEmail) {
    const user = await UserModel.findByEmail(userEmail);
    if (user) {
      return [true, user];
    }
    return [false];
  }

  static async signIn({ email, password }) {
    const [exist, user] = await UserModel.getUserIfExist(email);
    if (!exist) {
      throw UserNotFoundExc();
    }
    if (!validatePassword(user, password)) {
      throw CredentialNotMatchExc();
    }

    return generateJwt(user);
  }

  static async registerUser({ email, displayName, password }) {
    const [user] = await UserModel.getUserIfExist(email);
    if (user) {
      throw EmailUnavailableExc();
    }
    const [passwordHash, passwordSalt] = hashPassword(password);
    const userToStore = {
      ...defaultRegistration,
      email,
      passwordHash,
      passwordSalt,
      displayName,
    };

    return UserModel.query().insertAndFetch(userToStore);
  }
}
