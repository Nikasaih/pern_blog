import { Model } from "objection";

export class UserModel extends Model {
  static get tableName() {
    return "users";
  }

  static findByEmail(email) {
    return UserModel.query().findOne({ email });
  }

  static registerUser(user) {
    return UserModel.query().insertAndFetch(user);
  }
}
