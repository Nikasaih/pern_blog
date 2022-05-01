import { PostModel } from "../models/modelsClass/postModel.js";
import { createPostSchema } from "../models/modelsSchema/postModelSchema.js";
import { hasAuthorAuthority } from "../services/hasAuthorityServices.js";
import { jwtAuthMidleware } from "../midlewares/jwtAuthMidleware.js";

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

  app.post("/posts", jwtAuthMidleware, async (req, res) => {
    const { body, auth } = req;
    if (!hasAuthorAuthority(auth.role)) {
      res.status(401);
      return;
    }

    if (!createPostSchema.validate(body)) {
      res.status(403);
      return;
    }
    const postToSave = { ...body, authorId: auth.id };
    if (body.isPublish === true) {
      res.status(201).send(await PostModel.createOneAndPublish(postToSave));
      return;
    }
    const created = await PostModel.createOne(postToSave);
    res.status(201).send(created);
  });

  //Todo publishPostByid

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
