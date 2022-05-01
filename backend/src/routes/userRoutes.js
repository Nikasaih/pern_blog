import { jwtAuthMidleware } from "../midlewares/jwtAuthMidleware.js";
import { UserModel } from "../models/modelsClass/userModel.js";
import {
  registerSchema,
  signInSchema,
} from "../models/modelsSchema/userModelSchema.js";
import {
  hasAdminAuthority,
  hasBasicAuthority,
} from "../services/hasAuthorityServices.js";

const userRoutes = ({ app }) => {
  app.post("/register", async (req, res) => {
    const { body } = req;

    if (!registerSchema.validateSync(body)) {
      res.status(400).send("you have not send valid request");
      return;
    }
    await UserModel.registerUser(body);
    res.status(201).send("registration complete");
  });

  app.post("/sign-in", async (req, res) => {
    const { body } = req;
    if (!signInSchema.validateSync(body)) {
      res.status(400).send("you have not send valid request");
      return;
    }

    const response = await UserModel.signIn(body);
    if (response.badCredential) {
      res.status(400).send("Unable to sign-in, look at your credentials");
    }
    res.send(response.jwt);
  });

  app.delete("/delete-my-account", jwtAuthMidleware, async (req, res) => {
    const { auth } = req;
    if (hasBasicAuthority(auth.role)) {
      await UserModel.deleteAccount(auth.id);
      res.status(202).send("It's sad to see you go away");
      return;
    }
    res.status(403).send("you're not allow to delete other account");
  });

  app.post("/suspend-user/:userId", jwtAuthMidleware, (req, res) => {
    const {
      auth,
      params: { userId },
    } = req;

    if (hasAdminAuthority(auth.role)) {
      UserModel.suspendAccount(userId, 10);
      res.status(202).send(`user with id : ${id} has been suspend`);
    }

    res.status(403).send("you're not allow to suspend a user");
  });

  app.post("/unsuspend-user/:userId", jwtAuthMidleware, (req, res) => {
    const {
      auth,
      params: { userId },
    } = req;

    if (hasAdminAuthority(auth.role)) {
      UserModel.unSuspendAccount(userId);
      res.status(202).send(`user with id : ${id} has been unsuspend`);
    }

    res.status(403).send("you're not allow to unsuspend a user");
  });

  app.post("/ban-user/:userId", jwtAuthMidleware, (req, res) => {
    const {
      auth,
      params: { userId },
    } = req;

    if (hasAdminAuthority(auth.role)) {
      UserModel.banAccount(userId);
      res.status(202).send(`user with id : ${id} has been ban`);
    }

    res.status(403).send("you're not allow to ban a user");
  });
};

export default userRoutes;
