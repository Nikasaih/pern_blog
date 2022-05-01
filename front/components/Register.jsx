import { signInSchema } from "../api/routesBodySchema/userModelSchema.js";
import { Field, Formik} from "formik";
import { registerRequest, signInRequest } from "../api/requests/userRequest.js";
const initialValues = { password: "", email: "", displayName: "" };

export const Register = async () => {
  const handleAuthenticationSubmit = (
    { password, email, displayName },
    { resetForm }
  ) => {

    await registerRequest({ password, email, displayName });
    await signInRequest({ password, email });
    resetForm();
  };

  return (
    <Formik
      validationSchema={signInSchema}
      onSubmit={handleAuthenticationSubmit}
      initialValues={initialValues}
    >
      {({ isSubmitting, isValid, handleSubmit }) => {
        return (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4"
          >
            <Field type="email" name="email" placeholder="Email" />
            <Field name="password" />
            <Field name="displayName" />
            <button disabled={!isValid || isSubmitting}>Sign-in</button>
          </form>
        );
      }}
    </Formik>
  );
};
