import Link from "next/link";

export const HeaderUnLoggedComponent = () => {
  return (
    <>
      <Link href="/register">
        <a>Register</a>
      </Link>
      <Link href="/sign-in">
        <a>Login</a>
      </Link>
    </>
  );
};
