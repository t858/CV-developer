import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";

export const Data = ({ el, index, data, setData, isEdit }) => {
  const handleChange = (e) => {
    data.data[index][e.target.name] = e.target.value;
    setData({ ...data, data: data.data });
  };

  const onDelete = () => {
    const allExceptSeletedData = data.data.filter(
      (el) => el !== data.data[index]
    );
    setData({ ...data, data: allExceptSeletedData });
  };

  return (
    <div className="space-y-1 relative group">
      {!isEdit ? (
        <h6 className="uppercase font-bold text-[color:var(--primary-color)] overflow-hidden">
          {el.title}
        </h6>
      ) : (
        <TextareaAutosize
          name="title"
          value={data.data[index].title}
          className="hover:ring uppercase font-bold text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
          onChange={(e) => handleChange(e)}
        />
      )}
      {!isEdit ? (
        <p className="text-sm overflow-hidden">{el.text}</p>
      ) : (
        <TextareaAutosize
          name="text"
          value={data.data[index].text}
          className="hover:ring text-sm  text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
          onChange={(e) => handleChange(e)}
        />
      )}
      {isEdit && (
        <motion.span
          onClick={onDelete}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3 }}
          className="opacity-0 group-hover:opacity-100 absolute -top-2 -right-3 font-bold text-lg text-red-500 hover:text-red-600 cursor-pointer"
        >
          x
        </motion.span>
      )}
    </div>
  );
};
