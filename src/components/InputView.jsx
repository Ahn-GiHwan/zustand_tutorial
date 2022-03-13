import React from "react";
import useStore from "../zustand/store";

const InputView = () => {
  const { value } = useStore();
  return <div>input value : {value || "없음"}</div>;
};

export default InputView;
