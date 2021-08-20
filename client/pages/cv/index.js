import { useRef } from "react";
import Layout from "../../components/Layout";
// import { Template1 } from "./Template1";
// import Image from "next/image";
import ReactToPdf from "react-to-pdf";
import { Template2 } from "./Template2";

export default function Cv() {
  const ref = useRef();
  return (
    <Layout>
      <section className="py-10">
        <div className="flex justify-center">
          {/* <Tempalate1 ref={ref} /> */}
          <Template2 ref={ref} />
        </div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
      </section>
    </Layout>
  );
}
