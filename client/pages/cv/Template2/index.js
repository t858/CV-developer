import { forwardRef } from "react";
import { Heroicons } from "../../../components/Heroicons";
import Image from "next/image";
import { heroMail1, heroMail2, heroMap, heroWeb } from "../../../assets/svg";

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
          <div key={idx} className="space-y-4 mb-14">
            <h4 className="uppercase text-xl font-bold text-center tracking-widest">
              {l.title}
            </h4>
            <ul className="w-3/4 mx-auto space-y-2">
              {l.data.map((el, index) => (
                <li
                  key={index}
                  className={`
                flex items-center text-sm ${el.icon && "space-x-4"}`}
                >
                  {el.icon && (
                    <Heroicons
                      d={el.icon}
                      d2={el?.icon2}
                      size="h-6 w-6"
                      color=""
                      solid
                    />
                  )}
                  <span className="w-full">{el.text}</span>
                </li>
              ))}
            </ul>
          </div>
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
          <div key={idx} className="space-y-2 mb-8">
            <h4 className="uppercase text-xl text-[#335384] font-bold tracking-widest">
              {l.title}
            </h4>
            <ul className="space-y-1">
              {l.data.map((el, index) => (
                <li
                  key={index}
                  className={`
                flex items-center text-sm ${el.icon && "space-x-4"}`}
                >
                  {el.icon && (
                    <Heroicons
                      d={el.icon}
                      d2={el?.icon2}
                      size="h-6 w-6"
                      color=""
                      solid
                    />
                  )}
                  <span className="w-full">{el.text}</span>
                </li>
              ))}
            </ul>
          </div>
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
        icon: heroMap,
      },
      {
        icon: heroMail1,
        icon2: heroMail2,
        text: "What is Lorem Ipsum",
      },
      {
        icon: heroWeb,
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
