import React from "react";

export const LeftData = ({ el }) => {
  return (
    <div className="space-y-2 mb-8">
      <h6 className="font-bold uppercase text-[color:var(--primary-color)]">{el.title}</h6>
      <p className="text-sm text-gray-600">{el.text}</p>
    </div>
  );
};
