import { motion } from "framer-motion";
import Image from "next/image";

export const CricleButton = ({ action, icon }) => {
  return (
    <motion.button
      initial={{scale:1}}
      whileHover={{scale:1.05}}
      onClick={action}
      className="border border-gray-300 rounded-full h-12 w-12 flex justify-center items-center"
    >
      <Image src={icon} width={25} height={25} className="filter dark:invert" />
    </motion.button>
  );
};
