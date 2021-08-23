import { Avatar } from "./Avatar";
import { LeftData } from "./LeftData";
import { Name } from "./Name";
import { RightData } from "./Rightdata";

export const Template3 = () => {
  return (
    <div className="flex h-full w-full">
      <div className="w-2/5 flex items-center">
        <div className="h-[85%] w-full border-8 border-l-0 border-[color:var(--primary-color)]">
          <Avatar />
          <div className="w-5/6 mx-auto ">
            <Name />
            {leftData.map((el, index) => (
              <LeftData key={index} el={el} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-3/5 flex items-center justify-center">
        <div className="w-3/4 h-[85%] space-y-7">
          {rightData.map((el, index) => (
            <RightData key={index} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

const leftData = [
  {
    title: "PROFIL PRIBADI",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
  },
  {
    title: "keahlian khusus",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
  },
  {
    title: "informasi kontak",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
  },
];

const rightData = [
  {
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
  },
  {
    title: "RIwayat akademis",
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
  },
];
