import { ValidationError } from "yup";
import { jwtAuthMidleware } from "../midlewares/jwtAuthMidleware.js";
import { UserModel } from "../models/modelsClass/userModel.js";
import {
  registerSchema,
  signInSchema,
} from "../models/modelsSchema/userModelSchema.js";

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
    // check has authority
    // deleteAccount
  });

  app.post("/suspend-user/:userId", (req, res) => {
    // check has admin authority
    // suspendAccount
  });

  app.post("/unsuspend-user/:userId", (req, res) => {
    // chekc has admin authority
    // unsuspendAccount
  });

  app.post("/ban-user/:userId", (req, res) => {
    // chek has admin authority
    // banUser
  });
};

export default userRoutes;
