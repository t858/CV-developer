import { motion } from "framer-motion";

export const Data = ({ el, index, data, setData }) => {
  const handleChange = (e) => {
    data.data[index][e.target.name] = e.target.value;
    setData({ ...data, data: data.data });
  };

  const onDelete = () => {
    const exceptSeletedData = data.data.filter((el) => el !== data.data[index]);
    setData({ ...data, data: exceptSeletedData });
  };

  return (
    <div className="space-y-1 relative group">
      <h6
        role="textbox"
        contentEditable
        suppressContentEditableWarning
        className="uppercase font-bold text-[color:var(--primary-color)] hover:ring overflow-hidden"
        onChange={(e) => handleChange(e)}
      >
        {el.title}
      </h6>

      <p
        name="text"
        role="textbox"
        contentEditable
        suppressContentEditableWarning
        onChange={(e) => handleChange(e)}
        className="text-sm hover:ring overflow-hidden"
      >
        {el.text}
      </p>
      <motion.span
        onClick={onDelete}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        className="opacity-0 group-hover:opacity-100 absolute -top-2 -right-3 font-bold text-lg text-red-500 hover:text-red-600 cursor-pointer"
      >
        x
      </motion.span>
    </div>
  );
};
