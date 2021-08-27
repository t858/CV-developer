import { useState } from "react";
import { Avatar } from "./Avatar";
import { Data } from "./Data";
import { Layout } from "./Layout";
import { Name } from "./Name";

export const Template4 = ({ isEdit }) => {
  const [data, setData] = useState(defaultData);
  return (
    <Layout>
      <div className="flex h-full w-full before:block">
        <div className="w-1/2 flex items-center">
          <Avatar />
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
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-4 pr-12">
          <div className="w-full h-[75%] space-y-6">
            <Name isEdit={isEdit} data={data} setData={setData} />
            {data.rightData.map((el, index) => (
              <Data
                el={el}
                key={index}
                data={data}
                id="rightData"
                index={index}
                isEdit={isEdit}
                setData={setData}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const defaultData = {
  name: "Alfirman Ejha Pahlepi",
  title: "Mahasiswa",
  leftData: [
    {
      title: "PROFIsL SAYA",
      data: [
        {
          title: "",
          subtitle: "",
          text: "What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
    {
      title: "AKREDITASI",
      data: [
        {
          title: "",
          subtitle: "",
          text: "What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
    {
      title: "RIWAYAT PEKERJAAN",
      data: [
        {
          title: "SMAN 2 KEJURUAN MUDA",
          subtitle: "PELAJAR | 2014 - 2017",
          text: "What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem Ipsum",
        },
        {
          title: "SMAN 2 KEJURUAN MUDA",
          subtitle: "PELAJAR | 2014 - 2017",
          text: "What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
  ],
  rightData: [
    {
      title: "KONTAK SAYA",
      data: [
        {
          title: "",
          subtitle: "",
          text: "What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
    {
      title: "KEAHLIAN UTAMA",
      data: [
        {
          title: "",
          subtitle: "",
          text: "What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
    {
      title: "RIWAYAT PENDIDIKAN",
      data: [
        {
          title: "SMAN 2 KEJURUAN MUDA",
          subtitle: "PELAJAR | 2014 - 2017",
          text: "What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem Ipsum",
        },
        {
          title: "SMAN 2 KEJURUAN MUDA",
          subtitle: "PELAJAR | 2014 - 2017",
          text: "What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
  ],
};
