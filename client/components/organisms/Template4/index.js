import { Avatar } from "./Avatar";
import { Layout } from "./Layout";

export const Template4 = () => {
  return (
    <Layout>
      <div className="flex h-full w-full before:block">
        <div className="w-1/2 flex items-center">
          <Avatar />
          <div className="h-full pt-[308px] w-3/4 mx-auto space-y-6">
            {leftData.map((el, index) => (
              <div key={index} className="space-y-3">
                <h6 className="font-semibold uppercase tracking-widest">
                  {el.title}
                </h6>
                {el.data.map((l, idx) => (
                  <div key={idx} className="space-y-1">
                    <div>
                      <p className="uppercase font-semibold text-[#317a8b]">
                        {l.title}
                      </p>
                      <p className="uppercase">{l.subtitle}</p>
                    </div>
                    <p className="text-gray-500">{l.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-4 pr-12">
          <div className="w-full h-[75%] space-y-6">
            <div className="space-y-4 ">
              <h1 className="font-bold text-5xl text-[#317a8b]">
                Alfirman Ejha Pahlepi
              </h1>
              <h4 className="text-lg font-semibold tracking-[0.4em] uppercase">
                Calon Programmer
              </h4>
            </div>
            {rightData.map((el, index) => (
              <div key={index} className="space-y-3">
                <h6 className="font-semibold uppercase tracking-widest">
                  {el.title}
                </h6>
                {el.data.map((l, idx) => (
                  <div key={idx} className="space-y-1">
                    <div>
                      <p className="uppercase font-semibold text-[#317a8b]">
                        {l.title}
                      </p>
                      <p className="uppercase">{l.subtitle}</p>
                    </div>
                    <p className="text-gray-500">{l.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const leftData = [
  {
    title: "PROFIL SAYA",
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
];

const rightData = [
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
];
