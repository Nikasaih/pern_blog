import { createCommentSchema } from "../models/modelsSchema/commentModelSchema.js";

const commentRoutes = ({ app }) => {
  app.get("/comments", (req, res) => {
    res.send(CommentModel.getAll());
  });

  app.get("/comments/:commentId", (req, res) => {
    const {
      params: { commentId },
    } = req;
    res.send(CommentModel.getById(commentId));
  });

  app.comment("/comments", (req, res) => {
    const { body } = req;
    if (!createCommentSchema.validate(body)) {
      res.status(403);
      return;
    }
    const created = CommentModel.createOne(body);
    res.status(201).send(created);
  });

  app.delete("/comments/:commentId", (req, res) => {
    const {
      params: { commentId },
    } = req;

    CommentModel.deleteOneById(commentId);
    res.send(`comment with Id ${commentId} deleted`);
  });
};

export default commentRoutes;
