import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";

export const RightData = ({ el, isEdit, data, setData, index, setCurrentData }) => {
  const handleTitleChange = (e) => {
    data.rightData[index].title = e.target.value;
    setData({ ...data, rightData: data.rightData });
  };

  const handleDataChange = (e, idx) => {
    data.rightData[index].data[idx][e.target.name] = e.target.value;
    setData({ ...data, rightData: data.rightData });
  };

  const onTitleDelete = () => {
    const allExceptSeletedData = data.rightData.filter(
      (el) => el !== data.rightData[index]
    );
    setCurrentData({ ...data, rightData: allExceptSeletedData });
  };

  const onDataDelete = (idx) => {
    const allExceptSeletedData = data.rightData[index].data.filter(
      (el) => el !== data.rightData[index].data[idx]
    );
    data.rightData[index].data = allExceptSeletedData;
    setCurrentData({ ...data, rightData: data.rightData });
  };

  const pushData = () => {
    data.rightData[index].data = [...data.rightData[index].data, newData];
    setCurrentData({ ...data, rightData: data.rightData });
  };

  return (
    <div className="space-y-7 relative group">
      {!isEdit ? (
        <h5 className="font-bold text-xl text-[color:var(--primary-color)] uppercase tracking-widest bg-gray-300 px-5 py-2">
          {el.title}
        </h5>
      ) : (
        <TextareaAutosize
          value={el.title}
          className="hover:ring font-bold text-xl text-[color:var(--primary-color)] uppercase tracking-widest overflow-hidden w-full resize-none bg-gray-300 px-5 py-2"
          onChange={(e) => handleTitleChange(e)}
          onBlur={()=>setCurrentData(data)}
        />
      )}
      {el?.data?.map((l, idx) => (
        <div key={idx} className="space-y-2 relative">
          {!isEdit ? (
            <>
              <h6 className="font-bold text-lg text-[color:var(--primary-color)] uppercase">
                {l.title}
              </h6>
              <h6 className="font-semibold text-lg text-[color:var(--primary-color)]">
                {l.subtitle}
              </h6>
              <p className="text-sm text-gray-600">{l.text}</p>
            </>
          ) : (
            <>
              <TextareaAutosize
                name="title"
                value={l.title}
                className="hover:ring font-bold text-lg text-[color:var(--primary-color)] uppercase overflow-hidden w-full resize-none"
                onChange={(e) => handleDataChange(e, idx)}
                onBlur={()=>setCurrentData(data)}
              />
              <TextareaAutosize
                name="subtitle"
                value={l.subtitle}
                className="hover:ring font-semibold text-lg text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
                onChange={(e) => handleDataChange(e, idx)}
                onBlur={()=>setCurrentData(data)}
              />
              <TextareaAutosize
                name="text"
                value={l.text}
                className="hover:ring text-sm text-gray-600 overflow-hidden w-full resize-none"
                onChange={(e) => handleDataChange(e, idx)}
                onBlur={()=>setCurrentData(data)}
              />

              <motion.span
                onClick={() => onDataDelete(idx)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.3 }}
                className="opacity-0 group-hover:opacity-100 absolute -top-3 -right-5 font-bold text-lg text-red-500 hover:text-red-600 cursor-pointer"
              >
                x
              </motion.span>
            </>
          )}
        </div>
      ))}
      {isEdit && (
        <>
          <motion.span
            onClick={onTitleDelete}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            className="opacity-0 group-hover:opacity-100 absolute -top-5 -right-5 font-bold text-lg text-red-500 hover:text-red-600 cursor-pointer"
          >
            x
          </motion.span>
          <div className="flex items-center justify-center">
            <motion.span
              id="leftData"
              onClick={(e) => pushData(e)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.4 }}
              className="text-xl font-bold cursor-pointer"
            >
              +
            </motion.span>
          </div>
        </>
      )}
    </div>
  );
};

const newData = {
  title: "Software engineer",
  subtitle: "Lorem Technology | Jan 1999 - Now",
  text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What is Lorem Ipsum Lorem Ipsum is simply dummy text of the",
};
