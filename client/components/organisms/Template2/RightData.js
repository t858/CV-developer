import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";

export const RightData = ({ l, isEdit, data, setData, index, setCurrentData }) => {

  const handleChange = (e) => {
    data.rightData[index][e.target.name] = e.target.value;
    setData({ ...data, rightData: data.rightData });
  };

  const onDelete = () => {
    const allExceptSeletedData = data.rightData.filter((el) => el !== data.rightData[index]);
    setCurrentData({ ...data, rightData: allExceptSeletedData });
  };

  return (
    <div className="space-y-2 mb-8 relative group">
      {!isEdit ? (
        <>
          <h4 className="uppercase text-xl text-[color:var(--primary-color)] font-bold tracking-widest">
            {l.title}
          </h4>
          <p className="text-sm">{l.text}</p>
        </>
      ) : (
        <>
          <TextareaAutosize
            name="title"
            value={l.title}
            className="hover:ring uppercase text-xl font-bold text-[color:var(--primary-color)] tracking-widest overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => handleChange(e)}
            onBlur={()=>setCurrentData(data)}
          />
          <TextareaAutosize
            name="text"
            value={l.text}
            className="hover:ring text-sm overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => handleChange(e)}
            onBlur={()=>setCurrentData(data)}
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
