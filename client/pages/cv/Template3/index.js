import Image from "next/image";

export default function Template3() {
  return (
    <template className="flex h-full w-full">
      <div className="w-2/5 flex items-center">
        <div className="h-[85%] w-full border-8 border-[#10375d]">
          <div className="flex justify-center relative -top-10">
            <Image
              width="250px"
              height="250px"
              src="https://avatars.githubusercontent.com/u/78687274?s=400&u=f68c9fb0da21776fcb1923914a87009508509431&v=4"
            />
          </div>
          <div className="w-5/6 mx-auto ">
            <div className="border-b-4 space-y-3 pb-6 border-[#10375d] mb-8">
              <h1 className="text-3xl font-bold text-[#10375d] tracking-wide uppercase">
                Alfirman Ejha Pahlepi
              </h1>
              <h4 className="font-semibold uppercase tracking-widest">
                Calon Programmer
              </h4>
            </div>
            <div className="space-y-2 mb-8">
              <h6 className="font-bold uppercase text-[#10375d]">
                PROfil pribadi
              </h6>
              <p className="text-sm text-gray-600">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What
                is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="space-y-2 mb-8">
              <h6 className="font-bold uppercase text-[#10375d]">
                Keahlian khusus
              </h6>
              <p className="text-sm text-gray-600">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What
                is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="space-y-2 mb-8">
              <h6 className="font-bold uppercase text-[#10375d]">
                informasi kontak
              </h6>
              <p className="text-sm text-gray-600">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What
                is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5 flex items-center justify-center">
        <div className="w-3/4 h-[85%] space-y-7">
          <div className="space-y-7">
            <h5 className="font-bold text-xl text-[#10375d] uppercase tracking-widest bg-gray-300 px-5 py-2">
              pengalaman kerja
            </h5>
            <div className="space-y-2">
              <h6 className="font-bold text-lg text-[#10375d] uppercase">
                software engineer
              </h6>
              <h6 className="font-semibold text-lg text-[#10375d]">
                Lorem Technology | Jan 1999 - Now
              </h6>
              <p className="text-sm text-gray-600">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What
                is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="space-y-2">
              <h6 className="font-bold text-lg text-[#10375d] uppercase">
                software engineer
              </h6>
              <h6 className="font-semibold text-lg text-[#10375d]">
                Lorem Technology | Jan 1999 - Now
              </h6>
              <p className="text-sm text-gray-600">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What
                is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              </p>
            </div>
          </div>
          <div className="space-y-7">
            <h5 className="font-bold text-xl text-[#10375d] uppercase tracking-widest bg-gray-300 px-5 py-2">
              Riwayat Akademis
            </h5>
            <div className="space-y-2">
              <h6 className="font-bold text-lg text-[#10375d] uppercase">
                software engineer
              </h6>
              <h6 className="font-semibold text-lg text-[#10375d]">
                Lorem Technology | Jan 1999 - Now
              </h6>
              <p className="text-sm text-gray-600">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What
                is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="space-y-2">
              <h6 className="font-bold text-lg text-[#10375d] uppercase">
                software engineer
              </h6>
              <h6 className="font-semibold text-lg text-[#10375d]">
                Lorem Technology | Jan 1999 - Now
              </h6>
              <p className="text-sm text-gray-600">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the What
                is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  );
}
