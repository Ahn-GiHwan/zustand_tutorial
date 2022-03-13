import React from "react";
import useStore from "../zustand/store";

const InputLength = () => {
  const { value } = useStore();
  return <div>input length : {value.length}</div>;
};

export default InputLength;
