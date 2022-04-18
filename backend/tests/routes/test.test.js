import Knex from "knex";
import { Model } from "objection";
import PgMock2 from "pgmock2";
import { CommentModel } from "../../src/models/modelsClass/commentModel.js";
const db = Knex(new PgMock2());
Model.knex(db);

/* eslint-disable no-undef */
describe("service tested", () => {
  it("msg", async () => {
    await CommentModel.query().insertAndFetch({
      content: "content",
      writedAt: Date.now(),
      authorId: 1,
      postId: 1,
    });

    const c = await CommentModel.query();
    console.log(c);
    expect(true).toBe(true);
  });
});
