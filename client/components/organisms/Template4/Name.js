import TextareaAutosize from "react-textarea-autosize";

export const Name = ({ isEdit, data, setData, setCurrentData }) => {
  return (
    <div className="space-y-4 ">
      {!isEdit ? (
        <>
          <h1 className="font-bold text-5xl text-[color:var(--primary-color)]">
            {data.name}
          </h1>
          <h4 className="text-lg font-semibold tracking-[0.4em] uppercase">
            {data.title}
          </h4>
        </>
      ) : (
        <>
          <TextareaAutosize
            value={data.name}
            className="hover:ring font-bold text-5xl text-[color:var(--primary-color)] overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            onBlur={() => setCurrentData(data)}
          />
          <TextareaAutosize
            value={data.title}
            className="hover:ring text-lg font-semibold tracking-[0.4em] uppercase overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => setData({ ...data, title: e.target.value })}
            onBlur={() => setCurrentData(data)}
          />
        </>
      )}
    </div>
  );
};
