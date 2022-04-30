import { Model } from "objection";
import { currentDateTime } from "../../utils/dateUtils.js";

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
    const newComment = { ...data, writedAt: currentDateTime() };
    return CommentModel.query().insert(newComment);
  }

  static async deleteOneById(id) {
    return CommentModel.query().deleteById(id);
  }
}
