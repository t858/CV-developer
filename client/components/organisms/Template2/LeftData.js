import React from "react";
import Image from "next/image";

export const LeftData = ({ l }) => {
  return (
    <div className="space-y-4 mb-14">
      <h4 className="uppercase text-xl font-bold text-center tracking-widest">
        {l.title}
      </h4>
      <ul className="w-3/4 mx-auto space-y-2">
        {l.data.map((el, index) => (
          <li
            key={index}
            className={` flex items-center text-sm ${el.icon && "space-x-4"}`}
          >
            {el.icon && (
              <Image width={20} height={20} src={el.icon} alt={el.icon} />
            )}
            <span className="w-full">{el.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
