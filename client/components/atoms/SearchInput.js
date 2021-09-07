import { searchIcon } from "../../assets/svg";
import { Heroicons } from "../atoms/Heroicons";

export const SearchInput = () => {
  return (
    <div className="text-center">
      <span className="relative">
        <input
          type="search"
          className="border border-gray-300 rounded-lg py-1 pl-3 pr-7 hide-clear"
        />
        <Heroicons
          d={searchIcon}
          color="text-gray-300"
          additional="absolute right-1 top-0 transform rotate-x-45"
        />
      </span>
    </div>
  );
};
