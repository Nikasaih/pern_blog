import { Model } from "objection";
import { currentDateTime } from "../../utils/dateUtils.js";

export class PostModel extends Model {
  static get tableName() {
    return "posts";
  }

  static async getAll() {
    return PostModel.query();
  }

  static async getById(id) {
    return PostModel.query().findById(id);
  }

  static async createOne(data) {
    return PostModel.query().insert(data);
  }

  static async deleteOneById(id) {
    return PostModel.query().deleteById(id);
  }

  static async publishById(id) {
    const post = await PostModel.query().findById(id);
    return PostModel.query().updateAndFetchById(id, {
      ...post,
      publicatedAt: currentDateTime(),
    });
  }
}
