import { Field, Formik } from "formik";
import { createNewCommentRequest } from "../../api/requests/commentRequest.js";
import { validationSchema } from "../../api/routesBodySchema/commentModelSchema.js";

const initialValues = { content: "" };

export const CreateCommentComponent = ({ postId }) => {
  const handleCreateCommentSubmit = async ({ content }, { resetForm }) => {
    await createNewCommentRequest({ content, postId });
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleCreateCommentSubmit}
      initialValues={initialValues}
    >
      {({ isSubmitting, isValid, handleSubmit }) => {
        return (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4"
          >
            <Field name="content" placeholder="Enter the content" />

            <button disabled={!isValid || isSubmitting} type="submit">
              Post comment
            </button>
          </form>
        );
      }}
    </Formik>
  );
};
