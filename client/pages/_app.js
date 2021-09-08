import GlobalContext from "../customHooks/useGlobalContext";
import "../style/theme.css";
import "../style/default.css";
import "../style/loading.css";
import "../style/style-template4.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
