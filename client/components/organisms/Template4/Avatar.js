import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="flex justify-center py-20">
      <span className="rounded-full border-[15px] overflow-hidden h-[220px] w-[220px] border-white">
        <Image
          width="220px"
          height="220px"
          src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
        />
      </span>
    </div>
  );
};
