import Image from "next/image";

export const CardUser = () => {
  return (
    <div className="p-2 flex space-x-3 shadow cursor-pointer">
      <div className=" w-1/3 p-2 relative h-20">
        <Image
          layout="fill"
          objectFit="contain"
          src="/assets/thumb/1.jpeg"
          alt="asd"
        />
      </div>
      <div className=" w-2/3 flex flex-col justify-center">
        <h5 className="font-semibold text-xl text-gray-600">
          Alfirman Ejha Pahlepi
        </h5>
        <p className="text-sm text-gray-500">2 September 2021 16:5 WIB</p>
      </div>
    </div>
  );
};
