export const RightData = ({el}) => {
  return (
    <div className="space-y-3">
      <h6 className="font-semibold uppercase tracking-widest">{el.title}</h6>
      {el.data.map((l, idx) => (
        <div key={idx} className="space-y-1">
          <div>
            <p className="uppercase font-semibold text-[color:var(--primary-color)]">{l.title}</p>
            <p className="uppercase">{l.subtitle}</p>
          </div>
          <p className="text-gray-500">{l.text}</p>
        </div>
      ))}
    </div>
  );
};
