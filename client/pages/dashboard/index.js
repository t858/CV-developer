import Layout from "../../components/Layout";
import { CardProject } from "./CardProject";

export default function Dashboard() {
  return (
    <Layout>
      <section>
        <div className="w-2/3 mx-auto py-3 space-y-5">
          <h4 className="font-semibold text-2xl">Recent projects</h4>
          <div className="grid grid-cols-3 gap-7">
            <CardProject />
            <CardProject />
            {/* <div className="shadow-md rounded-lg bg-white h-[200px]"></div>
            <div className="shadow-md rounded-lg bg-white h-[200px]"></div>
            <div className="shadow-md rounded-lg bg-white h-[200px]"></div>
            <div className="shadow-md rounded-lg bg-white h-[200px]"></div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
