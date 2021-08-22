import { useRef, useState } from "react";
import { useGlobalContext } from "../customHooks/useGlobalContext";
import { CricleButton } from "../components/atoms/CircleButton";
import { PrintButton } from "../components/atoms/PrintButton";
import { DesignOption } from "../components/molecules/DesignOption";
import { Template1 } from "../components/organisms/Template1";
import { Template2 } from "../components/organisms/Template2";
import { Template3 } from "../components/organisms/Template3";
import { Template4 } from "../components/organisms/Template4";

export default function Cv() {
  const [isOption, setOption] = useState(false);
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
      action: () => setOption(!isOption),
    },
    {
      icon: "/assets/icon/palete.png",
      action: () => alert("belum diatur"),
    },
  ];

  const themeTransition = {
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
  };

  return (
    <section
      style={themeTransition}
      className="relative dark:bg-gray-900 before:content-['your_device_screen_not_supported.'] before:text-2xl before:font-semibold before:text-red-600 lg:before:content-none"
    >
      <div className="justify-center space-x-5 py-10 overflow-auto hidden lg:flex">
        <div
          ref={ref}
          className="h-[1122px] w-[795px] bg-white text-gray-800 shadow-lg overflow-hidden"
        >
          {/* <Template1/> */}
          {/* <Template2/> */}
          {/* <Template3/> */}
          <Template4 />
        </div>
        <div className="space-y-3">
          {buttons.map((el, index) => (
            <CricleButton key={index} action={el.action} icon={el.icon} />
          ))}
          <PrintButton ref={ref} />
        </div>
      </div>
      <DesignOption isOption={isOption} setOption={setOption} />
    </section>
  );
}
