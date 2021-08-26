import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Data } from "./Data";
import { Name } from "./Name";

export const Template1 = ({ isEdit }) => {
  const [data, setData] = useState(defaultData);

  const pushData = () => setData({ ...data, data: [...data.data, newData] });

  return (
    <div className="flex flex-col justify-center space-y-10 py-10 ">
      {/* head */}
      <div className="flex items-center w-full space-x-8 px-14">
        <Image
          width="150px"
          height="150px"
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
        />

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

const defaultData = {
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
