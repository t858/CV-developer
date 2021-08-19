import React from "react";

export const Header = ({ isSignUp, setSignUp, dispatch }) => {
  return (
    <div className="flex justify-between items-center px-6 bg-gray-100">
      <ul className="flex space-x-8 pt-3">
        <li>
          <div
            onClick={() => setSignUp(false)}
            className={`${
              !isSignUp
                ? "text-red-400 border-b border-red-500"
                : "text-gray-600 hover:text-red-300 duration-300"
            } flex items-center space-x-2 font-semibold py-3 cursor-pointer`}
          >
            <UserIcon />
            <p>Sign In</p>
          </div>
        </li>
        <li>
          <div
            onClick={() => setSignUp(true)}
            className={`${
              isSignUp
                ? "text-red-400 border-b border-red-500"
                : "text-gray-600 hover:text-red-300 duration-300"
            } flex items-center space-x-2 font-semibold py-3 cursor-pointer`}
          >
            <EditIcon />
            <p>Sign Up</p>
          </div>
        </li>
      </ul>
      {/* x icon */}
      <div
        onClick={() =>
          dispatch({
            type: "CHANGE_ISMODAL",
            value: false,
          })
        }
        className="cursor-pointer z-50"
      >
        <CancelIcon />
      </div>
    </div>
  );
};

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const CancelIcon = () => (
  <svg
    className="fill-current text-gray-600"
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 18 18"
  >
    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
  </svg>
);
