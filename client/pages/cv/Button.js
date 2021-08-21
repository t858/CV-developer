import React from "react";
import Image from "next/image";

export const Button = ({ action, icon }) => {
  return (
    <button
      onClick={action}
      className="border border-gray-300 rounded-full h-12 w-12 flex justify-center items-center"
    >
      <Image src={icon} width={25} height={25} className="filter dark:invert" />
    </button>
  );
};
