import { Model } from "objection";
import { generateJwt } from "../../services/jwtServices.js";
import {
  hashPassword,
  validatePassword,
} from "../../services/pwHashServices.js";
import { currentDateTime } from "../../utils/dateUtils.js";
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

  static async findByEmail(email) {
    return UserModel.query().findOne({ email });
  }

  static async signIn({ email, password }) {
    const user = await UserModel.findByEmail(email);
    if (!user) {
      return { badCredential: "bad credential" };
    }
    if (!validatePassword(user, password)) {
      return { badCredential: "bad credential" };
    }

    return { jwt: generateJwt(user) };
  }

  static async registerUser({ email, displayName, password }) {
    const user = await UserModel.findByEmail(email);
    if (user) {
      return;
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

  static async suspendAccount(id, suspensionDuration) {
    const user = await UserModel.query().findById(id);

    const suspensionAmount = user.suspensionAmount + 1;
    return UserModel.query()
      .findById(id)
      .patch({
        suspendedAt: currentDateTime(),
        supensionDuration: currentDateTime(suspensionDuration),
        suspensionAmount,
      });
  }

  static async unSuspendAccount(id) {
    return UserModel.query().findById(id).patch({
      suspendedAt: null,
      supensionDuration: null,
    });
  }

  static async banAccount(id) {
    this.deleteAccount(id);
  }

  static async deleteAccount(id) {
    return UserModel.query().deleteById(id);
  }

  static async getAllUser() {
    const users = await UserModel.query();
    return users.map((user) => {
      delete user.passwordSalt;
      delete user.passwordHash;
      return user;
    });
  }

  static async promoteUserAsAdminByEmail(email) {
    const user = await UserModel.findByEmail(email);
    if (!user) {
      return false;
    }
    user.role = UserRole.ADMIN;
    await UserModel.query().updateAndFetchById(user.id, user);
    return true;
  }
}
