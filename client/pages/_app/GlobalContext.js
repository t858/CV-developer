import { createContext, useContext, useReducer } from "react";

import { ModalLogin } from "./ModalLogin";
import { Loading } from "./Loading";

const Context = createContext();

const initialState = {
  isLoading: false,
  isModalLogin: false,
  isLogin: !false,
  isDark: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_MODAL_LOGIN":
      return {
        ...state,
        isModalLogin: action.payload,
      };
    case "SET_LOGIN":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_DARK":
      return {
        ...state,
        isDark: action.payload,
      };
    default:
      return state;
  }
};

export default function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Loading />
      {children}
      <ModalLogin />
    </Context.Provider>
  );
}

export function useGlobalContext() {
  return useContext(Context);
}
