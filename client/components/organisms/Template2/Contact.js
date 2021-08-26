import Image from "next/image";
import React from "react";

export const Contact = ({ l, isEdit, data, setData }) => {
  const handleChange = (e, index) => {
    data.contact.data[index].text = e.target.value;
    setData({ ...data, contact: { ...data.contact, data: data.contact.data } });
  };

  console.log(data);

  return (
    <div className="space-y-4 mb-14">
      <h4
        role={isEdit ? "textbox" : "heading"}
        contentEditable={isEdit}
        suppressContentEditableWarning={isEdit}
        onChange={(e) =>
          setData({
            ...data,
            contact: { ...data.contact, title: e.target.value },
          })
        }
        className={`${
          isEdit && "hover:ring"
        } uppercase text-xl font-bold text-center tracking-widest`}
      >
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
            <span
              role={isEdit ? "textbox" : "contentinfo"}
              contentEditable={isEdit}
              suppressContentEditableWarning={isEdit}
              onChange={(e) => handleChange(e, index)}
              className={`${isEdit && "hover:ring"} w-full`}
            >
              {el.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
