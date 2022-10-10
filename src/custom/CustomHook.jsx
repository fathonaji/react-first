import React, { useState } from "react";

const CustomHook = () => {};

const useBoolean = (initialState = false) => {
  const [booleanState, setState] = useState(initialState);
  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!booleanState);
  return [
    booleanState,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
};

export default CustomHook;
export { useBoolean };
