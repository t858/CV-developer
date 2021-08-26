import React from "react";

export const LeftData = ({ l }) => {
  return (
    <div className="space-y-4 mb-10">
      <h4 className="uppercase text-xl font-bold text-center tracking-widest">
        {l.title}
      </h4>
      <p className="w-3/4 mx-auto text-sm">{l.text}</p>
    </div>
  );
};
