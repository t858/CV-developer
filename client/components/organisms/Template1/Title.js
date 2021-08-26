import TextareaAutosize from "react-textarea-autosize";

export const Title = ({ data, setData, isEdit }) => {
  return !isEdit ? (
    <h3 className="text-xl font-semibold overflow-hidden">{data.title}</h3>
  ) : (
    <TextareaAutosize
      value={data.title}
      className="hover:ring text-xl font-semibold text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
      onChange={(e) => setData({ ...data, title: e.target.value })}
    />
  );
};
