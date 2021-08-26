import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";

export const LeftData = ({ el, isEdit, data, setData, index }) => {
  const handleChange = (e) => {
    data.leftData[index][e.target.name] = e.target.value;
    setData({ ...data, leftData: data.leftData });
  };

  const onDelete = () => {
    const allExceptSeletedData = data.leftData.filter(
      (el) => el !== data.leftData[index]
    );
    setData({ ...data, leftData: allExceptSeletedData });
  };
  return (
    <div className="space-y-2 mb-8 relative group">
      {!isEdit ? (
        <>
          <h6 className="font-bold uppercase text-[color:var(--primary-color)]">
            {el.title}
          </h6>
          <p className="text-sm text-gray-600">{el.text}</p>
        </>
      ) : (
        <>
          <TextareaAutosize
            name="title"
            value={el.title}
            className="hover:ring font-bold uppercase text-[color:var(--primary-color)] overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => handleChange(e)}
          />
          <TextareaAutosize
            name="text"
            value={el.text}
            className="hover:ring text-sm text-gray-600 overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => handleChange(e)}
          />
          <motion.span
            onClick={onDelete}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            className="opacity-0 group-hover:opacity-100 absolute -top-2 -right-3 font-bold text-lg text-red-500 hover:text-red-600 cursor-pointer"
          >
            x
          </motion.span>
        </>
      )}
    </div>
  );
};
