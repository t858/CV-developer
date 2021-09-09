import Image from "next/image";

export const Avatar = ({ data }) => {
  return (
    <div className="flex justify-center py-20 w-1/2 absolute left-0 top-0">
      <div className="rounded-full border-[15px] border-white overflow-hidden h-[220px] w-[220px] relative">
        <Image width="220px" height="220px" src={data?.avatar.url} unoptimized />
      </div>
    </div>
  );
};
