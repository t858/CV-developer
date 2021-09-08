export const CardUser = ({ data }) => {
  const avatar = data.userData.avatar.url;

  return (
    <div className="p-2 flex space-x-3 shadow cursor-pointer">
      <div className=" w-1/3 p-2 h-20 relative">
        <img src={avatar} alt="asd" className="h-full w-full object-cover" />
      </div>
      <div className=" w-2/3 flex flex-col justify-center">
        <h5 className="font-semibold text-xl text-gray-600">{data.name}</h5>
        <p className="text-sm text-gray-500">{data.createdAt}</p>
      </div>
    </div>
  );
};
