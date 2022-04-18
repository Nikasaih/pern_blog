import { UserModel } from "../models/modelsClass/userModel.js";

export const suspendAccount = (id) => {};

export const banAccount = (id) => {};

export const deleteAccount = (id) => {
    await UserModel.query().deleteById(id);

};
