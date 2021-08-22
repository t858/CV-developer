import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="flex justify-center relative -top-10">
      <Image
        width="250px"
        height="250px"
        src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
      />
    </div>
  );
};
