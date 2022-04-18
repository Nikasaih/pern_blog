import { PostModel } from "../models/modelsClass/postModel.js";
import { createPostSchema } from "../models/modelsSchema/postModelSchema.js";

const baseRoute = "/posts";

const postRoutes = ({ app }) => {
  app.get("/posts", (req, res) => {
    res.send(PostModel.getAll());
  });

  app.get("/posts/:postId", (req, res) => {
    const {
      params: { postId },
    } = req;
    res.send(PostModel.getById(postId));
  });

  app.post("/posts", (req, res) => {
    const { body } = req;
    if (!createPostSchema.validate(body)) {
      res.status(403);
      return;
    }
    const created = PostModel.createOne(body);
    res.status(201).send(created);
  });

  app.delete("/posts/:postId", (req, res) => {
    const {
      params: { postId },
    } = req;

    PostModel.deleteOneById(postId);
    res.send(`post with Id ${postId} deleted`);
  });
};

export default postRoutes;
