import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export const Name = ({ isEdit, data, setData }) => {
  return !isEdit ? (
    <h1 className="text-5xl font-bold text-[color:var(--primary-color)] tracking-wider overflow-hidden">
      {data.name}
    </h1>
  ) : (
    <TextareaAutosize
      value={data.name}
      className="hover:ring font-extrabold text-5xl tracking-wider text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
      onChange={(e) => setData({ ...data, name: e.target.value })}
    />
  );
};
