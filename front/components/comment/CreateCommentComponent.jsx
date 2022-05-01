import { signInSchema } from "../api/routesBodySchema/userModelSchema.js";
import { Field, Formik } from "formik";
import { createNewCommentRequest } from "../../api/requests/commentRequest.js";

const initialValues = { content: "" };

export const CreateCommentComponent = ({ postId }) => {
  const handleAuthenticationSubmit = async ({ content }, { resetForm }) => {
    await createNewCommentRequest({ content, postId });
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
            <Field name="title" placeholder="Enter your email" />
            <Field name="content" placeholder="Enter your email" />

            <button disabled={!isValid || isSubmitting} type="submit">
              Sign-in
            </button>
          </form>
        );
      }}
    </Formik>
  );
};
