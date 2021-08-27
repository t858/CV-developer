import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";

export const Data = ({ el, isEdit, data, setData, index, id }) => {
  const handleTitleChange = (e) => {
    data[id][index].title = e.target.value;
    setData({ ...data, [id]: data[id] });
  };

  const handleDataChange = (e, idx) => {
    data[id][index].data[idx][e.target.name] = e.target.value;
    setData({ ...data, [id]: data[id] });
  };

  const onTitleDelete = () => {
    const allExceptSeletedData = data[id].filter(
      (el) => el !== data[id][index]
    );
    setData({ ...data, [id]: allExceptSeletedData });
  };

  const onDataDelete = (idx) => {
    const allExceptSeletedData = data[id][index].data.filter(
      (el) => el !== data[id][index].data[idx]
    );
    data[id][index].data = allExceptSeletedData;
    setData({ ...data, [id]: data[id] });
  };

  return (
    <div className="space-y-3 relative group">
      {!isEdit ? (
        <h6 className="font-semibold uppercase tracking-widest">{el.title}</h6>
      ) : (
        <>
          <TextareaAutosize
            value={el.title}
            className="hover:ring font-semibold uppercase tracking-widest overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => handleTitleChange(e)}
          />
          <motion.span
            onClick={onTitleDelete}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            className="opacity-0 group-hover:opacity-100 absolute -top-5 -right-3 font-bold text-lg text-red-500 hover:text-red-600 cursor-pointer"
          >
            x
          </motion.span>
        </>
      )}
      {el.data.map((l, idx) => (
        <div key={idx} className="space-y-1 relative group">
          {!isEdit ? (
            <>
              {l.title && (
                <div>
                  <p className="uppercase font-semibold text-[color:var(--primary-color)]">
                    {l.title}
                  </p>
                  <p className="uppercase">{l.subtitle}</p>
                </div>
              )}
              <p className="text-gray-500">{l.text}</p>
            </>
          ) : (
            <>
              {l.title && (
                <>
                  <div>
                    <TextareaAutosize
                      name="title"
                      value={l.title}
                      className="hover:ring uppercase font-semibold text-[color:var(--primary-color)] overflow-hidden w-full resize-none bg-transparent"
                      onChange={(e) => handleDataChange(e, idx)}
                    />
                    <TextareaAutosize
                      name="subtitle"
                      value={l.subtitle}
                      className="hover:ring uppercase overflow-hidden w-full resize-none bg-transparent"
                      onChange={(e) => handleDataChange(e, idx)}
                    />
                  </div>
                  <motion.span
                    onClick={() => onDataDelete(idx)}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.3 }}
                    className="opacity-0 group-hover:opacity-100 absolute -top-2 -right-3 font-bold text-lg text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    x
                  </motion.span>
                </>
              )}
              <TextareaAutosize
                name="text"
                value={l.text}
                className="hover:ring text-gray-500 overflow-hidden w-full resize-none bg-transparent"
                onChange={(e) => handleDataChange(e, idx)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
