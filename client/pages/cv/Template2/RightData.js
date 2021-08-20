import React from "react";

export const RightData = ({ l }) => {
  return (
    <div className="space-y-2 mb-8">
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
              <Image width={20} height={20} src={el.icon} alt={el.icon} />
            )}
            <span className="w-full">{el.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
