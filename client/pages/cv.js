import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../customHooks/useGlobalContext";
import { CricleButton } from "../components/atoms/CircleButton";
import { PrintButton } from "../components/atoms/PrintButton";
import { DesignOption } from "../components/molecules/DesignOption";
import { Template4 } from "../components/organisms/Template4";

export default function Cv() {
  const [isTemplateOption, setTemplateOption] = useState(false);
  const { state, dispatch } = useGlobalContext();
  const ref = useRef();

  const togleTheme = () => {
    const body = document.querySelector("body");
    if (state.isDark) {
      body.removeAttribute("class");
      dispatch({ type: "SET_DARK", payload: false });
    } else {
      body.classList.add("dark");
      dispatch({ type: "SET_DARK", payload: true });
    }
  };

  const buttons = [
    {
      icon: "/assets/icon/arrow.png",
      action: () => alert("belum diatur"),
    },
    {
      icon: `/assets/icon/${state.isDark ? "moon" : "sun"}.png`,
      action: () => togleTheme(),
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

  const themeTransition = {
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
  };

  return (
    <section style={themeTransition} className="relative dark:bg-gray-900">
      <div className="flex justify-center space-x-5 py-10 ">
        <div
          ref={ref}
          className="h-[1122px] w-[795px] bg-white text-gray-800 shadow-lg overflow-hidden"
        >
          <Template4 />
        </div>
        <div className="space-y-3">
          {buttons.map((el, index) => (
            <CricleButton key={index} action={el.action} icon={el.icon} />
          ))}
          <PrintButton ref={ref} />
        </div>
      </div>
      <AnimatePresence>{isTemplateOption && <DesignOption />}</AnimatePresence>
    </section>
  );
}
