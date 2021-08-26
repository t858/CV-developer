import TextareaAutosize from "react-textarea-autosize";

export const Name = ({ data, setData, isEdit }) => {
  return !isEdit ? (
    <h1 className="font-extrabold text-5xl tracking-wider text-[color:var(--primary-color)]">
      {data.name}
    </h1>
  ) : (
    <TextareaAutosize
      value={data.name}
      className="hover:ring font-extrabold text-5xl tracking-wider text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
      onChange={(e) => setData({ ...data, name: e.target.value })}
    ></TextareaAutosize>
  );
};
