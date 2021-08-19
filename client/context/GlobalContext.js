import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  isLoading: !false,
  isModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_MODAL":
      return {
        ...state,
        isModal: action.payload,
      };
    default:
      return state;
  }
};

export default function ContextWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export function useGlobalContext() {
  return useContext(Context);
}
