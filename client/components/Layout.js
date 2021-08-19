import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "../utils/useOutsideClick";
import { useGlobalContext } from "../Wrapper";

export default function Layout({ children }) {
  const { state, dispatch } = useGlobalContext();
  const [isDropdown, setDropdown] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => isDropdown && setDropdown(false));
  return (
    <>
      <header className="py-4 flex items-center justify-between px-10">
        <Link href="/">
          <h1 className="text-3xl font-semibold cursor-pointer">cv maker.</h1>
        </Link>
        <div
          ref={ref}
          onClick={() =>
            state.isLogin
              ? setDropdown(!isDropdown)
              : dispatch({ type: "CHANGE_ISMODAL", value: true })
          }
          className="bg-indigo-600 h-10 w-10 relative rounded-full border-2 border-gray-200 flex justify-center items-center cursor-pointer"
        >
          <span className="text-white text-lg">?</span>
          <AnimatePresence>
            {isDropdown && (
              <motion.button
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`absolute py-2 px-3 -left-5 top-11 border border-gray-300 bg-white rounded shadow-lg hover:bg-indigo-50 outline-none focus:outline-none text-sm`}
              >
                Logout
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </header>
      <main className="bg-gray-100 min-h-[calc(100vh-72px)]">{children}</main>
      <footer></footer>
    </>
  );
}

const variants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: 50,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.23,
    },
  },
};
