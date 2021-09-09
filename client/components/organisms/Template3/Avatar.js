import { motion } from "framer-motion";
import Image from "next/image";
import { cameraIcon1, cameraIcon2 } from "../../../assets/svg";
import { Heroicons } from "../../atoms/Heroicons";

export const Avatar = ({ onImageChange, data, isEdit }) => {
  return (
    <div className="flex justify-center relative -top-10">
      <motion.div className="relative" whileHover="hover" initial="initial">
        <Image width="250px" height="250px" src={data?.avatar.url} unoptimized />
        {isEdit && (
          <motion.div
            variants={toRightTop}
            className="absolute rounded-full h-7 w-7 bg-white border -top-3 -right-3 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            <Heroicons
              d={cameraIcon1}
              d2={cameraIcon2}
              size="h-5 w-5"
              color="text-gray-600"
            />
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              className="absolute inset-0 opacity-0"
              onChange={(e) => onImageChange(e)}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const toRightTop = {
  initial: {
    x: -20,
    y: 20,
    opacity: 0,
  },
  hover: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};
