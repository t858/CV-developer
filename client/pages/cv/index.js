import { useRef, useState } from "react";
// import Layout from "../../components/Layout";
// import { Template1 } from "./Template1";
import Image from "next/image";
import ReactToPdf from "react-to-pdf";
import { Template2 } from "./Template2";

export default function Cv() {
  const [isTemplateOption, setTemplateOption] = useState(false);
  const ref = useRef();

  const buttons = [
    {
      icon: "/assets/icon/sun.png",
      action: () => alert("belum diatur"),
    },
    {
      icon: "/assets/icon/list.png",
      action: () => setTemplateOption(!isTemplateOption),
    },
    {
      icon: "/assets/icon/palete.png",
      action: () => alert("belum diatur"),
    },
    {
      icon: "/assets/icon/github.png",
      action: () => alert("belum diatur"),
    },
  ];

  return (
    <section className="relative">
      <div className="flex justify-center space-x-5 py-10">
        {/* <Tempalate1 ref={ref} /> */}
        <Template2 ref={ref} />
        <div className="space-y-3">
          {buttons.map((el, index) => (
            <button
              key={index}
              onClick={el.action}
              className="border border-gray-400 rounded-full h-12 w-12 flex justify-center items-center"
            >
              <Image src={el.icon} width={25} height={25} />
            </button>
          ))}
          <ReactToPdf targetRef={ref} filename="cv.pdf">
            {({ toPdf }) => (
              <button
                className="border border-gray-400 rounded-full h-12 w-12 flex justify-center items-center"
                onClick={toPdf}
              >
                <Image src="/assets/icon/print.png" width={25} height={25} />
              </button>
            )}
          </ReactToPdf>
        </div>
      </div>
      {isTemplateOption && (
        <div className="fixed left-0 bottom-0 w-full h-40 bg-black/80 flex justify-center py-5 space-x-3">
          <div className="h-full w-[100px] bg-gray-50 rounded"></div>
          <div className="h-full w-[100px] bg-gray-50 rounded"></div>
          <div className="h-full w-[100px] bg-gray-50 rounded"></div>
        </div>
      )}
    </section>
  );
}
