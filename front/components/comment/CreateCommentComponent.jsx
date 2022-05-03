import { Formik } from "formik"
import { createNewCommentRequest } from "../../api/requests/commentRequest.js"
import { validationSchema } from "../../api/routesBodySchema/commentModelSchema.js"
import { MyFormButton } from "../other/MyFormButton.jsx"
import { MyFieldField } from "../other/MyFieldField.jsx"

const initialValues = { content: "" }

export const CreateCommentComponent = ({ postId }) => {
  const handleCreateCommentSubmit = async ({ content }, { resetForm }) => {
    await createNewCommentRequest({ content, postId })
    resetForm()
  }

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
            <MyFieldField name="content" placeholder="Enter the content" />

            <MyFormButton
              disabled={!isValid || isSubmitting}
              type="submit"
              text={"Post comment"}
            />
          </form>
        )
      }}
    </Formik>
  )
}
