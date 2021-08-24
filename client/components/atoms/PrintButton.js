import { forwardRef } from "react";
import { motion } from "framer-motion";
import ReactToPdf from "react-to-pdf";
import { Heroicons } from "./Heroicons";
import { printIcon } from "../../assets/svg";

export const PrintButton = forwardRef((props, ref) => {
  return (
    <ReactToPdf targetRef={ref} filename="cv.pdf">
      {({ toPdf }) => (
        <motion.button
          onClick={toPdf}
          initial={{ rotate: 360 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 1, ease: "easeIn", type: "spring" }}
          className="border border-gray-300 rounded-full h-12 w-12 flex justify-center items-center"
        >
          <Heroicons
            d={printIcon}
            size="h-7 w-7"
            color="text-gray-700 dark:text-gray-100"
            src="/assets/icon/print.png"
          />
        </motion.button>
      )}
    </ReactToPdf>
  );
});
