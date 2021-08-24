import { useState } from "react";
import Image from "next/image";
import { Data } from "./Data";
import { motion } from "framer-motion";

export const Template1 = ({ isEdit }) => {
  const [data, setData] = useState(defaultData);

  const pushData = () => {
    const newData = {
      title: "new",
      text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
    };
    setData({ ...data, data: [...data.data, newData] });
  };

  return (
    <div className="flex flex-col justify-center space-y-10 py-10 ">
      {/* head */}
      <div className="flex items-center w-full space-x-8 px-14">
        <Image
          className="rounded-full"
          width="150px"
          height="150px"
          src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
        />

        <div className="space-y-3 w-full">
          <h1
            role={isEdit ? "textbox" : "heading"}
            contentEditable={isEdit}
            suppressContentEditableWarning={isEdit}
            className={`${
              isEdit && "hover:ring"
            } font-extrabold text-5xl tracking-wider text-[color:var(--primary-color)] overflow-hidden`}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          >
            {data.name}
          </h1>
          <h3
            role={isEdit ? "textbox" : "heading"}
            contentEditable={isEdit}
            suppressContentEditableWarning={isEdit}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            value={data.title}
            className={`${
              isEdit && "hover:ring"
            } text-xl font-semibold overflow-hidden`}
          >
            {data.title}
          </h3>
        </div>
      </div>
      {/* main */}
      <div className="w-3/4 ml-28 border-l-4 border-[color:var(--primary-color)] p-5 grid grid-cols-2 gap-6">
        {data.data.map((el, index) => (
          <Data
            key={index}
            el={el}
            index={index}
            data={data}
            setData={setData}
            isEdit={isEdit}
          />
        ))}
        <div className="flex items-center justify-center" onClick={pushData}>
          <motion.span
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.4 }}
            className="text-5xl font-bold cursor-pointer"
            onClick={pushData}
          >
            +
          </motion.span>
        </div>
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
