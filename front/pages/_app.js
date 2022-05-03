import { AppContextProvider } from "../components/AppContext.jsx"
import "../styles/globals.css"
import { HeaderComponent } from "../components/header/HeaderComponent.jsx"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <HeaderComponent />
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  )
}

export default MyApp
