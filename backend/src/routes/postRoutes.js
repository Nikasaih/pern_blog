import { PostModel } from "../models/modelsClass/postModel.js";
import { createPostSchema } from "../models/modelsSchema/postModelSchema.js";

const baseRoute = "/posts";

const postRoutes = ({ app }) => {
  app.get("/posts", async (req, res) => {
    res.send(await PostModel.getAll());
  });

  app.get("/posts/:postId", async (req, res) => {
    const {
      params: { postId },
    } = req;
    const post = await PostModel.getById(postId);
    if (!post) {
      res.status(404).send(`post with id : ${postId} not found`);
      return;
    }
    res.send(post);
  });

  app.post("/posts", async (req, res) => {
    const { body } = req;
    if (!createPostSchema.validate(body)) {
      res.status(403);
      return;
    }

    const created = await PostModel.createOne(body);
    if (body.isPublish === true) {
      res.status(401).send(await PostModel.publishById(created.id));
      return;
    }
    res.status(201).send(created);
  });

  app.delete("/posts/:postId", async (req, res) => {
    const {
      params: { postId },
    } = req;

    const post = await PostModel.deleteOneById(postId);
    if (!post) {
      res.status(404).send(`post with id : ${postId} not found`);
      return;
    }
    res.send(`post with Id ${postId} deleted`);
  });
};

export default postRoutes;
