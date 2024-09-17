import React from "react";
import FunctionProp1 from "./FunctionValidate1";

function FunctionValidate() {
  const data = {
    p1: 'hello',
    p2: 123,
  };

  return (
    <>
      <p>example no. 1</p>
      <FunctionProp1 example={data} />
    </>
  );
}

export default FunctionValidate;
