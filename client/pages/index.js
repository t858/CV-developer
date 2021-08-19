import Layout from "../components/Layout";
import { useGlobalContext } from "../context/GlobalContext";

export default function Home() {
  const { state, dispatch } = useGlobalContext();
  
  const getStarted = () => state.isLogin ? "" : dispatch({ type: "SET_MODAL_LOGIN", payload: true });

  return (
    <Layout>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <h1 className="font-semibold text-6xl">cvmaker.vercel.app</h1>
          <h6 className="text-xl text-gray-600">build you own cv for free</h6>
          <div className="flex space-x-5 mt-8">
            <button className="ring-4 ring-gray-300 text-gray-600 py-2 px-5 text-lg rounded-2xl">
              Github Repository
            </button>
            <button
              onClick={getStarted}
              className="ring-4 ring-gray-300 text-gray-600 py-2 px-5 text-lg rounded-2xl"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
