import { useRef, useState } from "react";
import { heroCheck, heroDots } from "../../../assets/svg";
import { Heroicons } from "../../../components/Heroicons";
import useOutsideClick from "../../../utils/useOutsideClick";
import { Dropdown } from "./Dropdown";

export const CardProject = () => {
  const [isDropdown, setDropdown] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => isDropdown && setDropdown(false));
  return (
    <div className="relative shadow-md rounded-lg bg-white">
      <div>
        <div className="p-4">
          <h6 className="font-semibold">Alfirman Ejha Pahlepi</h6>
          <p className="text-gray-500">Student</p>
        </div>
        <div className="border-t border-gray-300 py-2 px-4 text-sm text-gray-500 flex items-center justify-between">
          <p className="flex items-center space-x-1">
            <Heroicons d={heroCheck} size="h-5 w-5" />
            <span>Diperbarui</span>
          </p>
          <p>26-Juli-2021 13:3 WIB</p>
        </div>
      </div>
      {/* dots  */}
      <div
        ref={ref}
        onClick={() => setDropdown(!isDropdown)}
        className="hover:bg-gray-100 absolute right-1 top-1 p-1 rounded-full duration-200 cursor-pointer"
      >
        <Heroicons
          d={heroDots}
          size="h-5 w-5"
          additional="transform rotate-90"
        />
        <Dropdown isDropdown={isDropdown} />
      </div>
    </div>
  );
};
