import { createCommentSchema } from "../models/modelsSchema/commentModelSchema.js";
import { CommentModel } from "../models/modelsClass/commentModel.js";

const commentRoutes = ({ app }) => {
  app.get("/comments", async (req, res) => {
    res.send(await CommentModel.getAll());
  });

  app.get("/comments/:commentId", async (req, res) => {
    const {
      params: { commentId },
    } = req;
    const comment = await CommentModel.deleteOneById(commentId);
    if (!comment) {
      res.status(404).send(`post with id : ${commentId} not found`);
      return;
    }
    res.send(comment);
  });

  app.post("/comments", async (req, res) => {
    const { body } = req;

    if (!createCommentSchema.validate(body)) {
      res.status(403);
      return;
    }

    const created = await CommentModel.createOne(newComment);
    res.status(201).send(created);
  });

  app.delete("/comments/:commentId", async (req, res) => {
    const {
      params: { commentId },
    } = req;

    const comment = await CommentModel.deleteOneById(commentId);
    if (!comment) {
      res.status(404).send(`comment with id : ${commentId} not found`);
      return;
    }
    res.send(`comment with Id ${commentId} deleted`);
  });
};

export default commentRoutes;
