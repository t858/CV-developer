import Image from "next/image";
import { forwardRef } from "react";
import { LeftData } from "./LeftData";
import { RightData } from "./RightData";

export const Template2 = forwardRef((props, ref) => {
  return (
    <div
      className="h-[1122px] w-[795px] bg-white text-gray-800 shadow-lg flex"
      ref={ref}
    >
      <div className="h-full bg-[#335384] w-1/3 text-indigo-50">
        <div className="py-10 flex justify-center mb-5">
          <Image
            className="rounded-full"
            width="190px"
            height="190px"
            src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
          />
        </div>
        {lefts.map((l, idx) => (
          <LeftData key={idx} l={l} />
        ))}
      </div>
      <div className="h-full w-2/3 px-10 py-16">
        <div className="space-y-4 mb-20">
          <h1 className="text-5xl font-bold text-[#335384] tracking-wider">
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
});

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
