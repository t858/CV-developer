import { motion } from "framer-motion";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Contact } from "./Contact";
import { LeftData } from "./LeftData";
import { Name } from "./Name";
import { RightData } from "./RightData";

export const Template2 = ({ isEdit, currentData, setCurrentData }) => {
  const [data, setData] = useState(currentData);

  const pushData = (e) =>
    setCurrentData({ ...data, [e.target.id]: [...data[e.target.id], newData] });

  const onImageChange = (e) =>
    setCurrentData({
      ...data,
      avatar: { ...data.avatar, url: URL.createObjectURL(e.target.files[0]) },
      file: e.target.files[0],
    });

  return (
    <div className="flex h-full w-full">
      <div className="h-full bg-[color:var(--primary-color)] w-1/3 text-indigo-50">
        <Avatar onImageChange={onImageChange} isEdit={isEdit} data={data} />
        <Contact
          data={data}
          isEdit={isEdit}
          l={data.contact}
          setData={setData}
          setCurrentData={setCurrentData}
        />
        {data.leftData.map((l, idx) => (
          <LeftData
            l={l}
            key={idx}
            data={data}
            index={idx}
            isEdit={isEdit}
            setData={setData}
            setCurrentData={setCurrentData}
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
        <Name
          isEdit={isEdit}
          data={data}
          setData={setData}
          setCurrentData={setCurrentData}
        />
        {data.rightData.map((l, idx) => (
          <RightData
            key={idx}
            l={l}
            index={idx}
            isEdit={isEdit}
            data={data}
            setData={setData}
            setCurrentData={setCurrentData}
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

const newData = {
  title: "Lorem Ipsum Lorem",
  text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
};
