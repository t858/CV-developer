import { useState } from "react";
import { Avatar } from "./Avatar";
import { Data } from "./Data";
import { Layout } from "./Layout";
import { Name } from "./Name";

export const Template4 = ({ isEdit, currentData, setCurrentData }) => {
  const [data, setData] = useState(currentData);

  const onImageChange = (e) =>
    setCurrentData({
      ...data,
      avatar: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    });

  return (
    <Layout>
      <div className="flex h-full w-full before:block">
        <div className="w-1/2 flex items-center">
          <Avatar onImageChange={onImageChange} isEdit={isEdit} data={data} />
          <div className="h-full pt-[308px] w-3/4 mx-auto space-y-6 z-10">
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
