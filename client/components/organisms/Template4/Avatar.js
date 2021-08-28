import { motion } from "framer-motion";
import Image from "next/image";
import { cameraIcon1, cameraIcon2 } from "../../../assets/svg";
import { Heroicons } from "../../atoms/Heroicons";

export const Avatar = ({ onImageChange, data, isEdit }) => {
  return (
    <div className="flex justify-center py-20 w-1/2 absolute left-0 top-0">
      <div className="rounded-full border-[15px] border-white overflow-hidden h-[220px] w-[220px]">
        <motion.div className="relative" whileHover="hover" initial="initial">
          <Image width="220px" height="220px" src={data?.avatar} unoptimized />
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
                accept="image/*, image/jpg, image/jpeg"
                className="absolute inset-0 opacity-0"
                onChange={(e) => onImageChange(e)}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
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
