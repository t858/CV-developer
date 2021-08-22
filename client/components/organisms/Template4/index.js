import { Avatar } from "./Avatar";
import { Layout } from "./Layout";

export const Template4 = () => {
  return (
    <Layout>
      <div className="flex h-full w-full ">
        <div className="w-1/2 z-10">
          <Avatar />
        </div>
        <div className="w-1/2 flex flex-col justify-center px-4 pr-12">
          <div className="w-full h-[75%] bg-purple-300 space-y-10">
            <div className="space-y-4 ">
              <h1 className="font-bold text-5xl text-[#317a8b]">
                Alfirman Ejha Pahlepi
              </h1>
              <h4 className="text-lg font-semibold tracking-[0.4em] uppercase">
                Calon Programmer
              </h4>
            </div>
            <div className="space-y-2">
              <h6 className="font-semibold uppercase tracking-widest">
                Kontak saya
              </h6>
              <p className="text-gray-500">
                What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem
                IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem
                Ipsum
              </p>
            </div>
            <div className="space-y-2">
              <h6 className="font-semibold uppercase tracking-widest">
                Kontak saya
              </h6>
              <p className="text-gray-500">
                What is Lorem Ipsum Lorem Ipsum What is Lorem Ipsum Lorem
                IpsumWhat is Lorem Ipsum Lorem IpsumWhat is Lorem Ipsum Lorem
                Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
