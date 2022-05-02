import { createCommentSchema } from "../models/modelsSchema/commentModelSchema.js";
import { CommentModel } from "../models/modelsClass/commentModel.js";
import { hasBasicAuthority } from "../services/hasAuthorityServices.js";
import { jwtAuthMidleware } from "../midlewares/jwtAuthMidleware.js";

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

  app.get("/comments/by-post/:postId", async (req, res) => {
    const {
      params: { postId },
    } = req;
    const comments = await CommentModel.query();

    const response = comments.filter(
      (comment) => comment.postId === parseInt(postId)
    );

    res.send(response);
  });

  app.post("/comments", jwtAuthMidleware, async (req, res) => {
    const { body, auth } = req;
    if (!auth || !hasBasicAuthority(auth.role)) {
      res.status(401);
      return;
    }
    if (!createCommentSchema.validate(body)) {
      res.status(403);
      return;
    }

    const commentToSave = { ...body, authorId: auth.id };

    const created = await CommentModel.createOne(commentToSave);
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
