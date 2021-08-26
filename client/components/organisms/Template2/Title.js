import TextareaAutosize from "react-textarea-autosize";

export const Title = ({ isEdit, data, setData }) => {
  return !isEdit ? (
    <h4 className="font-semibold text-3xl overflow-hidden">{data.title}</h4>
  ) : (
    <TextareaAutosize
      value={data.title}
      className="hover:ring text-3xl font-semibold overflow-hidden w-full resize-none"
      onChange={(e) => setData({ ...data, title: e.target.value })}
    />
  );
};
