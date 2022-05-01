import { signInSchema } from "../api/routesBodySchema/userModelSchema.js";
import { Field, Formik } from "formik";
import { signInRequest } from "../api/requests/userRequest.js";

const initialValues = { password: "", email: "" };

export const AuthenticationComponent = () => {
  const handleAuthenticationSubmit = async (
    { password, email },
    { resetForm }
  ) => {
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
            <Field type="email" name="email" placeholder="Enter your email" />
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <button disabled={!isValid || isSubmitting} type="submit">
              Sign-in
            </button>
          </form>
        );
      }}
    </Formik>
  );
};
