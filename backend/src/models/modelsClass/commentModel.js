import { Model } from "objection";

export class CommentModel extends Model {
  static get tableName() {
    return "comments";
  }
  static async getAll() {
    return CommentModel.query();
  }

  static async getById(id) {
    return CommentModel.query().findById(id);
  }

  static async createOne(data) {
    return CommentModel.query().insert(data);
  }

  static async deleteOneById(id) {
    return CommentModel.query().deleteById(id);
  }
}
