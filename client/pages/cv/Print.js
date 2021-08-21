import { forwardRef } from "react";
import ReactToPdf from "react-to-pdf";
import Image from "next/image";

export const Print = forwardRef((props, ref) => {
  return (
    <ReactToPdf targetRef={ref} filename="cv.pdf">
      {({ toPdf }) => (
        <button
          className="border border-gray-300 rounded-full h-12 w-12 flex justify-center items-center"
          onClick={toPdf}
        >
          <Image
            className="filter dark:invert"
            src="/assets/icon/print.png"
            width={25}
            height={25}
          />
        </button>
      )}
    </ReactToPdf>
  );
});
