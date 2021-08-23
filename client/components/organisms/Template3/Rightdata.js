import React from "react";

export const RightData = ({ el }) => {
  return (
    <div className="space-y-7">
      <h5 className="font-bold text-xl text-[color:var(--primary-color)] uppercase tracking-widest bg-gray-300 px-5 py-2">
        {el.title}
      </h5>
      {el.data.map((l, idx) => (
        <div key={idx} className="space-y-2">
          <h6 className="font-bold text-lg text-[color:var(--primary-color)] uppercase">
            {l.title}
          </h6>
          <h6 className="font-semibold text-lg text-[color:var(--primary-color)]">{l.subtitle}</h6>
          <p className="text-sm text-gray-600">{l.text}</p>
        </div>
      ))}
    </div>
  );
};
