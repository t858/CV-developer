export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full w-full relative">
      <div
        style={{ borderLeft: "500px solid #317a8b" }}
        className="triangle-top absolute -top-24"
      ></div>
      <div
        style={{ borderRight: "500px solid #4fc8dc" }}
        className="triangle-top absolute top-[-210px] right-3 transform scale-125"
      ></div>
      {children}
      <div
        style={{ borderLeft: "500px solid #4fc8dc" }}
        className="triangle-bottom absolute bottom-[-210px]"
      ></div>
      <div
        style={{ borderRight: "500px solid #317a8b" }}
        className="triangle-bottom absolute bottom-[-115px] right-3 transform scale-125"
      ></div>
    </div>
  );
};
