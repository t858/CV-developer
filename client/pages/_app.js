import GlobalContext from "../customHooks/useGlobalContext";
import "../style/index.css"
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
