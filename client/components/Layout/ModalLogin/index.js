import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "../../../utils/useOutsideClick";
import { Header } from "./Header";
import { LoginForm } from "./LoginForm";
import { useGlobalContext } from "../../../context/GlobalContext";

export function ModalLogin() {
  const { state, dispatch } = useGlobalContext();
  const [isSignUp, setSignUp] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () =>
    dispatch({ type: "SET_MODAL_LOGIN", value: false })
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {state.isModalLogin && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed w-full h-100 inset-0 z-50 overflow-hidden justify-center items-center flex`}
          style={{ background: "rgba(0,0,0,.7)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            ref={ref}
            className="w-11/12 sm:w-3/4 lg:w-1/3 bg-white rounded shadow-lg z-50 overflow-y-auto"
          >
            <div className="modal-content text-left">
              <Header
                isSignUp={isSignUp}
                setSignUp={setSignUp}
                dispatch={dispatch}
              />
              <LoginForm isSignUp={isSignUp} setSignUp={setSignUp} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
