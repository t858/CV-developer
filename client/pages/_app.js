import Wrapper from "../Wrapper";
import "tailwindcss/tailwind.css";
import "./style.css";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
