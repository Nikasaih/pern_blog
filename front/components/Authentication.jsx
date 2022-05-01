import { signInSchema } from "../api/routesBodySchema/userModelSchema.js";
import { Field, Form, Formik, FormikProps } from "formik";
const initialValues = { password: "", email: "" };

export const Authentication = () => {
  const handleAuthenticationSubmit = ({ password, email }, { resetForm }) => {
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
            <button disabled={!isValid || isSubmitting}>Sign-in</button>
          </form>
        );
      }}
    </Formik>
  );
};
