export const HeaderLoggedComponent = () => {
  const { auth, setAuth } = useContext(AppContext);

  const handleLogout = () => {
    logoutRequest();
    setAuth(null);
  };
  return (
    <>
      <Link href="/">
        <a onClick={handleLogout}>Logout</a>
      </Link>
    </>
  );
};
