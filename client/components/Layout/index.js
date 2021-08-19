import { Loading } from "./Loading";
import { ModalLogin } from "./ModalLogin";

export default function index({ children }) {
  return (
    <>
      {children}
      <Loading />
      <ModalLogin />
    </>
  );
}
