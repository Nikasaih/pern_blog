import { signInSchema } from "../api/routesBodySchema/userModelSchema.js"
import { Field, Formik } from "formik"
import { signInRequest } from "../api/requests/userRequest.js"
import { MyButton } from "./other/MyButton.jsx"
import { MyFieldField } from "./other/MyFieldField.jsx"

const initialValues = { password: "", email: "" }

export const AuthenticationComponent = () => {
  const handleAuthenticationSubmit = async (
    { password, email },
    { resetForm }
  ) => {
    await signInRequest({ password, email })
    resetForm()
  }

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
            <MyFieldField
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <MyFieldField
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <MyButton
              disabled={!isValid || isSubmitting}
              type="submit"
              text={"Sign-in"}
            />
          </form>
        )
      }}
    </Formik>
  )
}
