import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useOutsideClick } from "../../customHooks/useOutsideClick";

export const DesignOption = ({ isOption, setOption }) => {
  const ref = useRef();
  useOutsideClick(ref, () => isOption && setOption(false));
  return (
    <AnimatePresence>
      {isOption && (
        <motion.div
          ref={ref}
          initial={{ y: "25vh" }}
          animate={{ y: 0 }}
          exit={{ y: "25vh" }}
          transition={{ type: "tween", ease: "easeOut" }}
          className="fixed left-0 bottom-0 w-full h-40 bg-black/80 flex justify-center py-5 space-x-3"
        >
          <div className="h-full w-[100px] bg-gray-50 rounded"></div>
          <div className="h-full w-[100px] bg-gray-50 rounded"></div>
          <div className="h-full w-[100px] bg-gray-50 rounded"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
