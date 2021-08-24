export const Layout = ({ children, theme }) => {
  return (
    <div style={{ theme }} className="flex flex-col h-full w-full relative">
      <div
        style={{ borderLeft: "500px solid var(--primary-color)" }}
        className="triangle-top absolute -top-24"
      ></div>
      <div
        style={{ borderRight: "500px solid var(--secondary-color)" }}
        className="triangle-top absolute top-[-210px] right-3 transform scale-125"
      ></div>
      {children}
      <div
        style={{ borderLeft: "500px solid var(--secondary-color)" }}
        className="triangle-bottom absolute bottom-[-207px]"
      ></div>
      <div
        style={{ borderRight: "500px solid var(--primary-color)" }}
        className="triangle-bottom absolute bottom-[-115px] right-3 transform scale-125"
      ></div>
    </div>
  );
};

Layout.defaultProps = {
  theme: { ["--none"]: "#fff" },
};

