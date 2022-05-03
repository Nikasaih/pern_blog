import { Field } from "formik"

export const MyFieldField = ({ name, type, placeholder }) => {
  return (
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className="border-solid border-gray-300 border py-2 px-4 w-full
  rounded text-gray-700"
    />
  )
}
