import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="flex justify-center py-20 w-1/2 absolute left-0 top-0">
      <div className="rounded-full border-[15px] border-white overflow-hidden h-[220px] w-[220px]">
        <Image
          width="220px"
          height="220px"
          src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
        />
      </div>
    </div>
  );
};
