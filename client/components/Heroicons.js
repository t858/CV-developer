import { heroQuest } from "../assets/svg";


export const Heroicons = ({
  d,
  d2,
  size,
  color,
  solid,
  strokeWidth,
  additional,
}) => {
  return !solid ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${color} ${additional}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d={d}
      />
      {d2 && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d={d2}
        />
      )}
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${color} ${additional}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path fillRule="evenodd" d={d} clipRule="evenodd" />
    </svg>
  );
};

Heroicons.defaultProps = {
  d: heroQuest,
  size: "h-6 w-6",
  color: "text-black",
  solid: false,
  strokeWidth: 1,
};
