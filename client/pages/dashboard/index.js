import { heroPlus } from "../../assets/svg";
import { Heroicons } from "../../components/Heroicons";
import Layout from "../../components/Layout";
import { CardProject } from "./CardProject";

export default function Dashboard() {
  return (
    <Layout>
      <section>
        <div className="w-2/3 mx-auto py-3 space-y-5">
          <h4 className="font-semibold text-2xl">My projects</h4>
          <div className="grid grid-cols-3 gap-7">
            <div className="shadow-md rounded-lg bg-white h-[150px] flex justify-center items-center">
              <Heroicons
                d={heroPlus}
                size="h-10 w-10"
                strokeWidth={2}
                color="text-gray-700"
                additional="cursor-pointer"
              />
            </div>
            <CardProject />
            <CardProject />
          </div>
        </div>
      </section>
    </Layout>
  );
}
