import { Avatar } from "./Avatar";
import { LeftData } from "./LeftData";
import { RightData } from "./RightData";

export const Template2 = ({ theme }) => {
  return (
    <div style={theme} className="flex h-full w-full">
      <div className="h-full bg-[color:var(--primary-color)] w-1/3 text-indigo-50">
        <Avatar />
        {lefts.map((l, idx) => (
          <LeftData key={idx} l={l} />
        ))}
      </div>
      <div className="h-full w-2/3 px-10 py-16">
        <div className="space-y-4 mb-20">
          <h1 className="text-5xl font-bold text-[color:var(--primary-color)] tracking-wider">
            Alfirman Ejha Pahlepi
          </h1>
          <h4 className="font-semibold text-3xl">Calon Programmer</h4>
        </div>
        {rights.map((l, idx) => (
          <RightData key={idx} l={l} />
        ))}
      </div>
    </div>
  );
};

Template2.defaultProps = {
  theme: { ["--none"]: "#fff" },
};

const lefts = [
  {
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
  {
    title: "What is Lorem",
    data: [
      { text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the" },
      { text: "What is Lorem Ipsum" },
      { text: "What is Lorem Ipsum" },
    ],
  },
  {
    title: "What is Lorem",
    data: [
      { text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the" },
      { text: "What is Lorem Ipsum" },
      { text: "What is Lorem Ipsum" },
    ],
  },
  {
    title: "What is Lorem",
    data: [
      { text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the" },
      { text: "What is Lorem Ipsum" },
      { text: "What is Lorem Ipsum" },
    ],
  },
];

const rights = [
  {
    title: "What is Lorem",
    data: [
      {
        text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the  Lorem Ipsum Lorem Ipsum is simply dummy text of the Lorem Ipsum Lorem Ipsum is simply dummy text of the  Lorem Ipsum Lorem Ipsum is simply dummy text of the",
      },
    ],
  },
  {
    title: "What is Lorem",
    data: [
      { text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the" },
      { text: "What is Lorem Ipsum" },
      { text: "What is Lorem Ipsum" },
    ],
  },
  {
    title: "What is Lorem",
    data: [
      { text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the" },
      { text: "What is Lorem Ipsum" },
      { text: "What is Lorem Ipsum" },
    ],
  },
];
