import { ValidationError } from "yup";
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

const errorManager = (res, error) => {
  if (error instanceof ValidationError) {
    res.status(400).send(error);
    return;
  }
  res.status(500);
};

const userRoutes = ({ app }) => {
  app.post("/register", async (req, res) => {
    const { body } = req;

    try {
      const registrationData = registerSchema.validateSync(body);
      // Todo send email for validation
      await UserModel.registerUser(registrationData);
      res.status(201).send("look at your mail");
    } catch (err) {
      errorManager(res, err);
    }
  });

  app.post("/sign-in", async (req, res) => {
    const { body } = req;

    try {
      const credentialSubmited = signInSchema.validateSync(body);
      const jwt = await UserModel.signIn(credentialSubmited);
      res.send(jwt);
    } catch (err) {
      errorManager(res, err);
    }
  });

  app.delete("/delete-my-account", jwtAuthMidleware, (req, res) => {
    const { auth } = req;
    if (hasBasicAuthority(auth.role)) {
      // deleteAccount
      res.status(202).send("It's sad to see you go away");
    }

    res.status(403).send("you're not allow to delete other account");
  });

  app.post("/suspend-user/:userId", jwtAuthMidleware, (req, res) => {
    const { auth } = req;
    if (hasAdminAuthority(auth.role)) {
      // suspendAccount
      res.status(202).send("user has been suspend");
    }

    res.status(403).send("you're not allow to suspend a user");
  });

  app.post("/unsuspend-user/:userId", jwtAuthMidleware, (req, res) => {
    const { auth } = req;
    if (hasAdminAuthority(auth.role)) {
      // suspendAccount
      res.status(202).send("user has been unsuspend");
    }

    res.status(403).send("you're not allow to unsuspend a user");
  });

  app.post("/ban-user/:userId", jwtAuthMidleware, (req, res) => {
    const { auth } = req;
    if (hasAdminAuthority(auth.role)) {
      // banAccount
      res.status(202).send("user has been ban");
    }

    res.status(403).send("you're not allow to ban a user");
  });
};

export default userRoutes;
