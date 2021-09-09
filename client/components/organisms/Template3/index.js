import { motion } from "framer-motion";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { LeftData } from "./LeftData";
import { Name } from "./Name";
import { RightData } from "./Rightdata";

export const Template3 = ({ isEdit, currentData, setCurrentData }) => {
  const [data, setData] = useState(currentData);

  const pushData = (e) =>
    setCurrentData({
      ...data,
      [e.target.id]: [...data[e.target.id], newData(e)],
    });

  const onImageChange = (e) =>
    setCurrentData({
      ...data,
      avatar: { ...data.avatar, url: URL.createObjectURL(e.target.files[0]) },
      file: e.target.files[0],
    });

  return (
    <div className="flex h-full w-full">
      <div className="w-2/5 flex items-center">
        <div className="h-[85%] w-full border-8 border-l-0 border-[color:var(--primary-color)]">
          <Avatar data={data} isEdit={isEdit} onImageChange={onImageChange} />
          <div className="w-5/6 mx-auto">
            <Name
              isEdit={isEdit}
              data={data}
              setData={setData}
              setCurrentData={setCurrentData}
            />
            {data.leftData.map((el, index) => (
              <LeftData
                el={el}
                key={index}
                data={data}
                index={index}
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
        </div>
      </div>
      <div className="w-3/5 flex items-center justify-center">
        <div className="w-3/4 h-[85%] space-y-7">
          {data.rightData.map((el, index) => (
            <RightData
              el={el}
              key={index}
              data={data}
              index={index}
              isEdit={isEdit}
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
    </div>
  );
};

const newLeftData = {
  title: "Lorem Ipsum Lorem",
  text: " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's",
};

const newRightData = {
  title: "PENGALAMAN KERJA",
  data: [
    {
      title: "Software engineer",
      subtitle: "Lorem Technology | Jan 1999 - Now",
      text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
    },
    {
      title: "Software engineer",
      subtitle: "Lorem Technology | Jan 1999 - Now",
      text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
    },
  ],
};

const newData = (e) => {
  switch (e.target.id) {
    case "leftData":
      return newLeftData;
    case "rightData":
      return newRightData;
    default:
      return alert("something went wrong");
  }
};
