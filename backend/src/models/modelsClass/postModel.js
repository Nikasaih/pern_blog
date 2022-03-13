import { Model } from "objection";

export class PostModel extends Model {
  static get tableName() {
    return "posts";
  }
}
