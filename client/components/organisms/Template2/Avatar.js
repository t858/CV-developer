import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="py-10 flex justify-center mb-5">
      <Image
        className="rounded-full"
        width="190px"
        height="190px"
        src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
      />
    </div>
  );
};
