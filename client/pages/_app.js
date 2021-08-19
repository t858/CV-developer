import { createContext, useReducer } from "react";
export const GlobalState = createContext();
import "tailwindcss/tailwind.css";
import "./style.css"

export const GlobalContext = createContext();

const initialState = {
  isLogin: false,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
  }
};

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
