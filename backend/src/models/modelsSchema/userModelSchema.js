import * as yup from "yup";

//Todo with yup
export const registerSchema = yup.object().shape({
  email: yup.string().email().required("please specified a email"),
  password: yup.string().required("please specified a password"),
  displayName: yup.string().required("please specified a display name"),
});
