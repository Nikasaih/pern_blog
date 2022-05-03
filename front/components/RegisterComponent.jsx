import { signInSchema } from "../api/routesBodySchema/userModelSchema.js"
import { useContext } from "react"
import { registerRequest, signInRequest } from "../api/requests/userRequest.js"
import AppContext from "./AppContext.jsx"
import Router from "next/router"
import { MyButton } from "./other/MyButton.jsx"
import { MyFieldField } from "./other/MyFieldField.jsx"
import { Formik } from "formik"

const initialValues = { password: "", email: "", displayName: "" }

export const RegisterComponent = () => {
  const { handleLogin, authData } = useContext(AppContext)

  const handleAuthenticationSubmit = async (
    { password, email, displayName },
    { resetForm }
  ) => {
    await registerRequest({ password, email, displayName })
    const response = await signInRequest({ password, email })
    handleLogin(response)
    resetForm()
    Router.push("/")
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
            <MyFieldField name="displayName" placeholder="Enter your pseudo" />

            <MyButton
              disabled={!isValid || isSubmitting}
              type="submit"
              text={"Register"}
            />
          </form>
        )
      }}
    </Formik>
  )
}
