import React from "react";

export const RightData = ({ l }) => {
  return (
    <div className="space-y-2 mb-8">
      <h4 className="uppercase text-xl text-[color:var(--primary-color)] font-bold tracking-widest">
        {l.title}
      </h4>
      <p className="text-sm">{l.text}</p>
    </div>
  );
};
