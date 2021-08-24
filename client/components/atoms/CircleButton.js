import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../customHooks/useOutsideClick";
import { Heroicons } from "./Heroicons";
import { colorSwatchIcon } from "../../assets/svg";

export const CricleButton = ({
  action,
  icon,
  isShowColor,
  setShowColor,
  setColor,
}) => {
  const ref = useRef();
  useOutsideClick(ref, () => isShowColor && setShowColor(false));

  return (
    <button
      ref={ref}
      onClick={action}
      className="border border-gray-300 rounded-full h-12 w-12 flex relative"
    >
      <AnimatePresence>
        {icon === colorSwatchIcon && isShowColor && (
          <Theme setColor={setColor} />
        )}
      </AnimatePresence>
      <motion.span
        initial={{ rotate: 360 }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 1, ease: "easeIn", type: "spring" }}
        className="w-full h-full flex items-center justify-center"
      >
        <Heroicons
          d={icon}
          size="h-7 w-7"
          strokeWidth={2}
          color="text-gray-600 dark:text-gray-100"
        />
      </motion.span>
    </button>
  );
};

const Theme = ({ setColor }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute -left-7 top-3 flex bg"
  >
    {paletes.map((el, index) => (
      <motion.div
        key={index}
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: el.x, opacity: 1 }}
        transition={{ delay: el.delay }}
        onMouseEnter={() => setColor(el.class)}
        className={`${el.color} rounded-full h-5 w-5 absolute left-0 top-0`}
      ></motion.div>
    ))}
  </motion.div>
);

const paletes = [
  {
    color: "bg-[#059669]",
    class: "c059669",
    delay: 0.8,
    x: -200,
  },
  {
    color: "bg-[#4C1D95]",
    class: "c4C1D95",
    delay: 0.7,
    x: -170,
  },
  {
    color: "bg-[#991B1B]",
    class: "c991B1B",
    delay: 0.6,
    x: -140,
  },
  {
    color: "bg-[#9ca3af]",
    class: "c9ca3af",
    delay: 0.5,
    x: -110,
  },
  {
    color: "bg-[#335384]",
    class: "c335384",
    delay: 0.4,
    x: -80,
  },
  {
    color: "bg-[#10375d]",
    class: "c10375d",
    delay: 0.3,
    x: -50,
  },
  {
    color: "bg-[#4fc8dc]",
    class: "c4fc8dc",
    delay: 0.2,
    x: -20,
  },
];
