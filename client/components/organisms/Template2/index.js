import { motion } from "framer-motion";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Contact } from "./Contact";
import { LeftData } from "./LeftData";
import { Name } from "./Name";
import { RightData } from "./RightData";

export const Template2 = ({ isEdit }) => {
  const [data, setData] = useState(defaultData);

  const pushData = (e) =>
    setData({ ...data, [e.target.id]: [...data[e.target.id], newData] });

  return (
    <div className="flex h-full w-full">
      <div className="h-full bg-[color:var(--primary-color)] w-1/3 text-indigo-50">
        <Avatar />
        <Contact
          l={data.contact}
          isEdit={isEdit}
          data={data}
          setData={setData}
        />
        {data.leftData.map((l, idx) => (
          <LeftData
            key={idx}
            l={l}
            index={idx}
            isEdit={isEdit}
            data={data}
            setData={setData}
          />
        ))}
        {isEdit && (
          <div className="flex items-center justify-center">
            <motion.span
              id="leftData"
              onClick={(e) => pushData(e)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.4 }}
              className="text-5xl font-bold cursor-pointer"
            >
              +
            </motion.span>
          </div>
        )}
      </div>
      <div className="h-full w-2/3 px-10 py-16">
        <Name isEdit={isEdit} data={data} setData={setData} />
        {data.rightData.map((l, idx) => (
          <RightData
            key={idx}
            l={l}
            index={idx}
            isEdit={isEdit}
            data={data}
            setData={setData}
          />
        ))}
        {isEdit && (
          <div className="flex items-center justify-center">
            <motion.span
              id="rightData"
              onClick={(e) => pushData(e)}
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
  contact: {
    title: "Hubungi Saya",
    data: [
      {
        text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
        icon: "/assets/icon/map-marker.png",
      },
      {
        icon: "/assets/icon/mail.png",
        text: "What is Lorem Ipsum",
      },
      {
        icon: "/assets/icon/web.png",
        text: "What is Lorem Ipsum",
      },
    ],
  },
  leftData: [
    {
      title: "What is Lorem",
      text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
    },
    {
      title: "What is Lorem",
      text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
    },
  ],
  rightData: [
    {
      title: "What is Lorem",
      text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
    },
    {
      title: "What is Lorem",
      text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
    },
  ],
};

const newData = {
  title: "Lorem Ipsum Lorem",
  text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
};
