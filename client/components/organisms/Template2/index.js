import { useState } from "react";
import { Avatar } from "./Avatar";
import { Contact } from "./Contact";
import { LeftData } from "./LeftData";
import { RightData } from "./RightData";

export const Template2 = ({ isEdit }) => {
  const [data, setData] = useState(defaultData);
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
          <LeftData key={idx} l={l} />
        ))}
      </div>
      <div className="h-full w-2/3 px-10 py-16">
        <div className="space-y-4 mb-20">
          <input
            role={isEdit ? "textbox" : "heading"}
            contentEditable={isEdit}
            suppressContentEditableWarning={isEdit}
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className={`${
              isEdit && "hover:ring"
            } text-5xl font-bold text-[color:var(--primary-color)] tracking-wider overflow-hidden`}
          />
            {/* {data.name} */}
          {/* </input> */}
          <h4
            role={isEdit ? "textbox" : "heading"}
            contentEditable={isEdit}
            suppressContentEditableWarning={isEdit}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className={`${
              isEdit && "hover:ring"
            } font-semibold text-3xl overflow-hidden`}
          >
            {data.title}
          </h4>
        </div>
        {data.rightData.map((l, idx) => (
          <RightData key={idx} l={l} />
        ))}
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
