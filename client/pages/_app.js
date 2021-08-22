import GlobalContext from "../config/context/GlobalContext";
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
