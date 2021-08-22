export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full w-full relative">
      {children}
      <div
        style={{ borderLeft: "500px solid #317a8b" }}
        className="triangle absolute -top-20"
      ></div>
      <div
        style={{ borderRight: "500px solid #4fc8dc" }}
        className="triangle absolute top-[-198px] right-3 transform scale-125"
      ></div>
    </div>
  );
};
