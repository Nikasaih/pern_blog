import { signInSchema } from "../api/routesBodySchema/userModelSchema.js";
import { Field, Formik } from "formik";
import { createNewPostRequest } from "../../api/requests/postRequest.js";

const initialValues = { title: "", content: "", isPublish: false };

export const CreatePostComponent = () => {
  const handleAuthenticationSubmit = async (
    { title, content, isPublish },
    { resetForm }
  ) => {
    await createNewPostRequest({ title, content, isPublish });
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
            <Field
              name="isPublish"
              type="checkbox"
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
