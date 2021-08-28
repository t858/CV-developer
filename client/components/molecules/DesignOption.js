import { useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../customHooks/useOutsideClick";
import dataJSON1 from "../organisms/Template1/data.json"
import dataJSON2 from "../organisms/Template2/data.json"
import dataJSON3 from "../organisms/Template3/data.json"
import dataJSON4 from "../organisms/Template4/data.json"

export const DesignOption = ({ isOption, setOption, setCurrentTemplate, setCurrentData }) => {
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
          className="fixed left-0 bottom-0 w-full h-40 bg-black/80 flex justify-center py-5 space-x-5 z-50"
        >
          {options.map((el, index) => (
            <motion.div
              key={index}
              onClick={() => {
                setCurrentTemplate(el.template);
                setCurrentData(el.data);
              }}
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

const options = [
  { template:1, data:dataJSON1 },
  { template:2, data:dataJSON2 },
  { template:3, data:dataJSON3 },
  { template:4, data:dataJSON4 },
]