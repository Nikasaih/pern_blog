import Link from "next/link";

export const HeaderForAuthorComponent = () => {
  return (
    <>
      <Link href="/author/create-post">
        <a>Create new post</a>
      </Link>
    </>
  );
};
