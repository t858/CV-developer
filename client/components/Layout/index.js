import React from "react";
import { Loading } from "./Loading";

export default function index({ children }) {
  return (
    <>
      <Loading />
      {children}
    </>
  );
}
