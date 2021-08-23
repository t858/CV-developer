import Image from "next/image";
import { Card } from "./Card";

export const Template1 = () => {
  return (
    <div className="flex flex-col justify-center space-y-10 py-10">
      {/* head */}
      <div className="flex items-center w-full space-x-8 px-14">
        <Image
          className="rounded-full"
          width="150px"
          height="150px"
          src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
        />

        <div className="space-y-3 w-full">
          <h1 className="font-extrabold text-5xl tracking-wider">
            Alfirman Pahlepi
          </h1>
          <h3 className="text-xl font-semibold">Calon Programer</h3>
        </div>
      </div>
      {/* main */}
      <div className="w-3/4 ml-28 border-l-4 border-gray-400 p-5 grid grid-cols-2 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
