import { Model } from "objection";

export class UserModel extends Model {
  static get tableName() {
    return "users";
  }

  static findByEmail(email) {
    return UserModel.query().findOne({ email });
  }
}
