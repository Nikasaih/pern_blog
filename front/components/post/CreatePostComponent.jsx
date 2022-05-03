import { Field, Formik } from "formik"
import { createNewPostRequest } from "../../api/requests/postRequest.js"
import { createPostSchema } from "../../api/routesBodySchema/postModelSchema.js"
import { MyFormButton } from "../other/MyFormButton.jsx"
import { MyFieldField } from "../other/MyFieldField.jsx"

const initialValues = { title: "", content: "", isPublish: false }

export const CreatePostComponent = () => {
  const handleAuthenticationSubmit = async (
    { title, content, isPublish },
    { resetForm }
  ) => {
    await createNewPostRequest({ title, content, isPublish })
    resetForm()
  }

  return (
    <Formik
      validationSchema={createPostSchema}
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
            <MyFieldField name="title" placeholder="Enter your title" />
            <MyFieldField name="content" placeholder="Enter your content" />
            <div className="flex flex-row">
              <p>Publish now</p>
              <Field className="" name="isPublish" type="checkbox" />
            </div>

            <MyFormButton
              disabled={!isValid || isSubmitting}
              type="submit"
              text={"Create post"}
            />
          </form>
        )
      }}
    </Formik>
  )
}
