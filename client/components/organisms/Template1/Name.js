import TextareaAutosize from "react-textarea-autosize";

export const Name = ({ data, setData, isEdit, setCurrentData }) => {
  return (
    <div className="space-y-3 w-full">
      {!isEdit ? (
        <>
          <h1 className="font-extrabold text-5xl tracking-wider text-[color:var(--primary-color)]">
            {data.name}
          </h1>
          <h3 className="text-xl font-semibold overflow-hidden">
            {data.title}
          </h3>
        </>
      ) : (
        <>
          <TextareaAutosize
            value={data.name}
            className="hover:ring font-extrabold text-5xl tracking-wider text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            onBlur={() => setCurrentData(data)}
          />
          <TextareaAutosize
            value={data.title}
            className="hover:ring text-xl font-semibold text-[color:var(--primary-color)] overflow-hidden w-full resize-none"
            onChange={(e) => setData({ ...data, title: e.target.value })}
            onBlur={() => setCurrentData(data)}
          />
        </>
      )}
    </div>
  );
};
