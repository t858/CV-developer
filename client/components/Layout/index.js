import { Loading } from "./Loading";
import Login from "./Login";

export default function index({ children }) {
  return (
    <>
      {children}
      <Loading />
      <Login />
    </>
  );
}
