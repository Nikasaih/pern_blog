import { ValidationError } from "yup";
import {
  registerSchema,
  signInSchema,
} from "../models/modelsSchema/userModelSchema.js";
import { register } from "../services/registrationServices.js";
import { signIn } from "../services/signInServices.js";

const baseRoute = "/users";

const userRoutes = ({ app }) => {
  app.post("/register", async (req, res) => {
    const { body } = req;

    try {
      const registrationData = registerSchema.validateSync(body);
      //Todo send email for validation
      await register(registrationData);
      res.status(201).send("look at your mail");
    } catch (e) {
      if (e instanceof ValidationError) {
        res.status(400).send(e);
        return;
      }
      res.status(500);
    }
  });

  app.post("/sign-in", async (req, res) => {
    const { body } = req;

    try {
      const credentialSubmited = signInSchema.validateSync(body);
      const jwt = await signIn(credentialSubmited);
      res.send(jwt);
      //validateConnection
      //generateToken
    } catch (e) {
      if (e instanceof ValidationError) {
        res.status(400).send(e);
      }
      console.log(e);
      res.status(500).send("");
    }
  });

  app.delete("/delete-my-account/:userEmail", (req, res) => {
    //check has authority
    //deleteAccount
  });

  app.post("/suspend-user/:userId", (req, res) => {
    //check has admin authority
    //suspendAccount
  });

  app.post("/unsuspend-user/:userId", (req, res) => {
    //chekc has admin authority
    //unsuspendAccount
  });

  app.post("/ban-user/:userId", (req, res) => {
    //chek has admin authority
    //banUser
  });
};

export default userRoutes;
