import { useState } from "react";
import { cameraIcon1, cameraIcon2 } from "../../../assets/svg";
import { Heroicons } from "../../atoms/Heroicons";
import { Avatar } from "./Avatar";
import { Data } from "./Data";
import { Layout } from "./Layout";
import { Name } from "./Name";

export const Template4 = ({ isEdit, currentData, setCurrentData }) => {
  const [data, setData] = useState(currentData);

  const onImageChange = (e) =>
    setCurrentData({
      ...data,
      avatar: { ...data.avatar, url: URL.createObjectURL(e.target.files[0]) },
      file: e.target.files[0],
    });

  return (
    <Layout>
      <div className="flex h-full w-full before:block">
        <div className="w-1/2 flex items-center">
          <Avatar data={data} />
          <div className="h-full pt-[308px] w-3/4 mx-auto space-y-6 z-10 relative">
            {isEdit && (
              <div className="absolute rounded-full h-7 w-7 bg-white border top-40 -right-3 flex items-center justify-center cursor-pointer overflow-hidden">
                <Heroicons
                  d={cameraIcon1}
                  d2={cameraIcon2}
                  size="h-5 w-5"
                  color="text-gray-600"
                />
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  className="absolute inset-0 opacity-0"
                  onChange={(e) => onImageChange(e)}
                />
              </div>
            )}
            {data.leftData.map((el, index) => (
              <Data
                el={el}
                key={index}
                data={data}
                id="leftData"
                index={index}
                isEdit={isEdit}
                setData={setData}
                setCurrentData={setCurrentData}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-4 pr-12">
          <div className="w-full h-[75%] space-y-6">
            <Name
              isEdit={isEdit}
              data={data}
              setData={setData}
              setCurrentData={setCurrentData}
            />
            {data.rightData.map((el, index) => (
              <Data
                el={el}
                key={index}
                data={data}
                id="rightData"
                index={index}
                isEdit={isEdit}
                setData={setData}
                setCurrentData={setCurrentData}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
