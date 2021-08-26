import { useRef, useState } from "react";
import { useGlobalContext } from "../customHooks/useGlobalContext";
import { CricleButton } from "../components/atoms/CircleButton";
import { PrintButton } from "../components/atoms/PrintButton";
import { DesignOption } from "../components/molecules/DesignOption";
import { Template1 } from "../components/organisms/Template1";
import { Template2 } from "../components/organisms/Template2";
import { Template3 } from "../components/organisms/Template3";
import { Template4 } from "../components/organisms/Template4";
import {
  checkIcon,
  colorSwatchIcon,
  leftArrowIcon,
  listIcon,
  moonIcon,
  pencilIcon,
  sunIcon,
} from "../assets/svg";
import { AnimatePresence } from "framer-motion";

export default function Cv() {
  const { state, dispatch } = useGlobalContext();
  
  const [currentTemplate, setCurrentTemplate] = useState(1);
  const [isShowColor, setShowColor] = useState(false);
  const [isOption, setOption] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [color, setColor] = useState("c335384");

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
      icon: leftArrowIcon,
      action: () => alert("belum diatur"),
    },
    {
      icon: state.isDark ? moonIcon : sunIcon,
      action: () => togleTheme(),
    },
    {
      icon: listIcon,
      action: () => setOption(!isOption),
    },
    {
      icon: colorSwatchIcon,
      action: () => setShowColor(!isShowColor),
    },
    {
      icon: isEdit ? checkIcon : pencilIcon,
      action: () => setEdit(!isEdit),
    },
  ];

  const themeTransition = {
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
  };

  const Template = () => {
    switch (currentTemplate) {
      case 1:
        return <Template1 isEdit={isEdit} />;
      case 2:
        return <Template2 isEdit={isEdit} />;
      case 3:
        return <Template3 isEdit={isEdit} />;
      case 4:
        return <Template4 isEdit={isEdit} />;
      default:
        return <p>no template detected</p>;
    }
  };

  return (
    <section
      style={themeTransition}
      className={`${color} bg relative dark:bg-gray-900 before:content-['your_device_screen_not_supported.'] before:text-2xl before:font-semibold before:text-red-600 lg:before:content-none`}
    >
      <div className="justify-center space-x-5 py-10 overflow-auto hidden lg:flex">
        <div
          ref={ref}
          className="h-[1122px] w-[795px] bg-white text-gray-800 shadow-lg overflow-hidden"
        >
          <Template />
        </div>
        <div className="space-y-3">
          {buttons.map((el, index) => (
            <CricleButton
              key={index}
              action={el.action}
              icon={el.icon}
              isShowColor={isShowColor}
              setShowColor={setShowColor}
              setColor={setColor}
            />
          ))}
          <AnimatePresence>
            {!isEdit && <PrintButton ref={ref} />}
          </AnimatePresence>
        </div>
      </div>
      <DesignOption
        isOption={isOption}
        setOption={setOption}
        setCurrentTemplate={setCurrentTemplate}
      />
    </section>
  );
}
