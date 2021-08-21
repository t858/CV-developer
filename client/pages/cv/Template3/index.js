import Image from "next/image";
import { LeftData } from "./LeftData";
import { RightData } from "./Rightdata";

export default function Template3() {
  return (
    <template className="flex h-full w-full">
      <div className="w-2/5 flex items-center">
        <div className="h-[85%] w-full border-8 border-l-0 border-[#10375d]">
          <div className="flex justify-center relative -top-10">
            <Image
              width="250px"
              height="250px"
              src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
            />
          </div>
          <div className="w-5/6 mx-auto ">
            <div className="border-b-4 space-y-3 pb-6 border-[#10375d] mb-8">
              <h1 className="text-3xl font-bold text-[#10375d] tracking-wide uppercase">
                Alfirman Ejha Pahlepi
              </h1>
              <h4 className="font-semibold uppercase tracking-widest">
                Calon Programmer
              </h4>
            </div>
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
    </template>
  );
}

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
