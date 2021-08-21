import { useRef, useState } from "react";
import { Template2 } from "./Template2";
import { TemplateOption } from "./TemplateOption";
import { AnimatePresence } from "framer-motion";
import { Print } from "./Print";
import { Button } from "./Button";
import { useGlobalContext } from "../_app/GlobalContext";

export default function Cv() {
  const [isTemplateOption, setTemplateOption] = useState(false);
  const { state, dispatch } = useGlobalContext();
  const ref = useRef();

  const togleTheme = () => {
    if (state.isDark) {
      document.querySelector("body").removeAttribute("class");
      dispatch({ type: "SET_DARK", payload: false });
    } else {
      document.querySelector("body").classList.add("dark");
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
          // h-[561px] w-[397.5px]
          className="h-[1122px] w-[795px] bg-white text-gray-800 shadow-lg overflow-hidden"
        >
          <Template2 />
        </div>
        <div className="space-y-3">
          {buttons.map((el, index) => (
            <Button key={index} action={el.action} icon={el.icon} />
          ))}
          <Print ref={ref} />
        </div>
      </div>
      <AnimatePresence>
        {isTemplateOption && (
          <TemplateOption isTemplateOption={isTemplateOption} />
        )}
      </AnimatePresence>
    </section>
  );
}
