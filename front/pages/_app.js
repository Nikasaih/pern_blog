import { AppContextProvider } from "../components/AppContext.jsx";
import "../styles/globals.css";
import { Header } from "./../components/Header.jsx";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <Header />
        <Component {...pageProps} />
      </AppContextProvider>
      x
    </>
  );
}

export default MyApp;
