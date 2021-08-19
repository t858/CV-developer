import GlobalContext from "../context/GlobalContext";
import "tailwindcss/tailwind.css";
import "./style.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
