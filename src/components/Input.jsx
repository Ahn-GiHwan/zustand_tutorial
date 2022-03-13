import React, { useCallback } from "react";
import useStore from "../zustand/store";

const Input = () => {
  const { value, setValue } = useStore();

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return <input value={value} onChange={onChange} />;
};

export default Input;
