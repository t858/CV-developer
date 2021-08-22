import { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactToPdf from "react-to-pdf";

export const PrintButton = forwardRef((props, ref) => {
  return (
    <ReactToPdf targetRef={ref} filename="cv.pdf">
      {({ toPdf }) => (
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="border border-gray-300 rounded-full h-12 w-12 flex justify-center items-center"
          onClick={toPdf}
        >
          <Image
            className="filter dark:invert"
            src="/assets/icon/print.png"
            width={25}
            height={25}
          />
        </motion.button>
      )}
    </ReactToPdf>
  );
});
