import { Model } from "objection";

export class CommentModel extends Model {
  static get tableName() {
    return "comments";
  }
}
