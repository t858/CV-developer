import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";

export const Contact = ({ l, isEdit, data, setData }) => {
  const handleChange = (e, index) => {
    data.contact.data[index].text = e.target.value;
    setData({ ...data, contact: { ...data.contact, data: data.contact.data } });
  };

  return (
    <div className="space-y-4 mb-14">
      {!isEdit ? (
        <h4 className="uppercase text-xl font-bold text-center tracking-widest">
          {l.title}
        </h4>
      ) : (
        <TextareaAutosize
          value={l.title}
          className="hover:ring uppercase text-xl font-bold text-center tracking-widest overflow-hidden w-full resize-none bg-transparent px-5"
          onChange={(e) =>
            setData({
              ...data,
              contact: { ...data.contact, title: e.target.value },
            })
          }
        />
      )}
      <ul className="w-3/4 mx-auto space-y-2">
        {l.data.map((el, index) => (
          <li
            key={index}
            className={` flex items-center text-sm ${el.icon && "space-x-4"}`}
          >
            <Image width={20} height={20} src={el.icon} alt={el.icon} />
            {!isEdit ? (
              <span onChange={(e) => handleChange(e, index)} className="w-full">
                {el.text}
              </span>
            ) : (
              <TextareaAutosize
                value={el.text}
                className="hover:ring overflow-hidden w-full resize-none bg-transparent"
                onChange={(e) => handleChange(e, index)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
