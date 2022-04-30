import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>Tous les Posts</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
      <Link href="/sign-in">
        <a>Login</a>
      </Link>
    </header>
  );
};
