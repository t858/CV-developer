import TextareaAutosize from "react-textarea-autosize";

export const Name = ({ isEdit, data, setData }) => {
  return (
    <div className="border-b-4 space-y-3 pb-6 border-[color:var(--primary-color)] mb-8">
      {!isEdit ? (
        <>
          <h1 className="text-3xl font-bold text-[color:var(--primary-color)] tracking-wide uppercase">
            {data.name}
          </h1>
          <h4 className="font-semibold uppercase tracking-widest">
            {data.title}
          </h4>
        </>
      ) : (
        <>
          <TextareaAutosize
            value={data.name}
            className="hover:ring text-3xl font-bold text-[color:var(--primary-color)] tracking-wide uppercase overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <TextareaAutosize
            value={data.title}
            className="hover:ring font-semibold uppercase tracking-widest overflow-hidden w-full resize-none bg-transparent"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </>
      )}
    </div>
  );
};
