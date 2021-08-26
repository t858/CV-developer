import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export const Name = ({ isEdit, data, setData }) => {
  return (
    <div className="space-y-4 mb-20">
      {!isEdit ? (
        <>
          <h1 className="text-5xl font-bold text-[color:var(--primary-color)] tracking-wider overflow-hidden">
            {data.name}
          </h1>
          <h4 className="font-semibold text-3xl overflow-hidden">
            {data.title}
          </h4>
        </>
      ) : (
        <>
          <TextareaAutosize
            value={data.name}
            className="hover:ring font-extrabold text-5xl tracking-wider text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <TextareaAutosize
            value={data.title}
            className="hover:ring text-3xl font-semibold overflow-hidden w-full resize-none"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </>
      )}
    </div>
  );
};
