import classNames from "classnames"

export const MyAdminButton = ({ text, disabled, onClick, colorClass }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "ml-5 w-15 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        colorClass
      )}
    >
      {text}
    </button>
  )
}
