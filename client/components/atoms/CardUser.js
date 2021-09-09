import { useRouter } from "next/router";

export const CardUser = ({ data, setImgLoad, isImgLoad }) => {
  const { push } = useRouter();
  const avatar = data.userData.avatar.url;

  return (
    <div
      onClick={() => push("/cv/" + data._id)}
      className="p-2 flex space-x-3 shadow cursor-pointer"
    >
      <div className=" w-1/3 p-2 h-20 relative">
        <img
          onLoad={() => setImgLoad(true)}
          src={avatar}
          alt="asd"
          className="h-full w-full object-cover"
        />
        {!isImgLoad && (
          <div className="lds-ring left-0 top-0 h-full w-full bg-gray-50 flex items-center justify-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <div className=" w-2/3 flex flex-col justify-center">
        <h5 className="font-semibold text-xl text-gray-600">{data.name}</h5>
        <p className="text-sm text-gray-500">{data.createdAt}</p>
      </div>
    </div>
  );
};
