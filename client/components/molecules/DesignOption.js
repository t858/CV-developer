import { useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../customHooks/useOutsideClick";

export const DesignOption = ({ isOption, setOption, setCurrentTemplate }) => {
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
          className="fixed left-0 bottom-0 w-full h-40 bg-black/80 flex justify-center py-5 space-x-5"
        >
          {templates.map((el, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentTemplate(el)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="h-full w-[90px] bg-gray-50 relative rounded-md overflow-hidden cursor-pointer"
            >
              <Image src={`/assets/thumb/${el}.jpeg`} layout="fill" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const templates = [1, 2, 3, 4];
