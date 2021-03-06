import Link from "next/link"

export const HeaderLinkComponent = ({ href, text, onClickAction }) => {
  const handleOnClick = () => {
    if (onClickAction) {
      onClickAction()
    }
  }
  return (
    <Link href={href}>
      <a onClick={handleOnClick} className="px-3 underline decoration-sky-500">
        {text}
      </a>
    </Link>
  )
}
