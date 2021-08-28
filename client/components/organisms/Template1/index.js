import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Data } from "./Data";
import { Name } from "./Name";
import { Heroicons } from "../../atoms/Heroicons";
import { cameraIcon1, cameraIcon2 } from "../../../assets/svg";

export const Template1 = ({ isEdit }) => {
  const [data, setData] = useState(defaultData);
  const [previewImg, setPreviewImg] = useState(defaultData.avatar);

  const pushData = () => setData({ ...data, data: [...data.data, newData] });

  const onImageUpload = (e) =>
    setPreviewImg(URL.createObjectURL(e.target.files[0]));

  return (
    <div className="flex flex-col justify-center space-y-10 py-10 ">
      {/* head */}
      <div className="flex items-center w-full space-x-8 px-14">
        <motion.div
          whileHover="hover"
          initial="initial"
          className=" group relative"
        >
          <Image
            width="150px"
            height="150px"
            className="rounded-full"
            unoptimized
            src={previewImg}
          />
          {isEdit && (
            <motion.div
              variants={toRightTop}
              className="absolute rounded-full h-7 w-7 bg-white border -top-3 -right-3 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <Heroicons d={cameraIcon1} d2={cameraIcon2} size="h-5 w-5" />
              <input
                type="file"
                accept="image/*, image/jpg, image/jpeg"
                className="absolute inset-0 opacity-0"
                onChange={(e) => onImageUpload(e)}
              />
            </motion.div>
          )}
        </motion.div>

        <Name isEdit={isEdit} data={data} setData={setData} />
      </div>
      {/* main */}
      <div className="w-3/4 ml-28 border-l-4 border-[color:var(--primary-color)] p-5 grid grid-cols-2 gap-6">
        {data.data.map((el, index) => (
          <Data
            el={el}
            key={index}
            data={data}
            index={index}
            isEdit={isEdit}
            setData={setData}
          />
        ))}
        {isEdit && (
          <div className="flex items-center justify-center">
            <motion.span
              onClick={pushData}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.4 }}
              className="text-5xl font-bold cursor-pointer"
            >
              +
            </motion.span>
          </div>
        )}
      </div>
    </div>
  );
};

const toRightTop = {
  initial: {
    x: -20,
    y: 20,
    opacity: 1,
  },
  hover: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

const defaultData = {
  avatar:
    "https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4",
  name: "Alfirman Ejha Pahlepi",
  title: "Calon Programmer",
  data: [
    {
      title: "Lorem Ipsum Lorem",
      text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsum Lorem",
      text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsum Lorem",
      text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsum Lorem",
      text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsum Lorem",
      text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsum Lorem",
      text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsum Lorem",
      text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
    },
  ],
};

const newData = {
  title: "Lorem Ipsum Lorem",
  text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
};
