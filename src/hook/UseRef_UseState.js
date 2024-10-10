import React, { useRef } from "react";

//usestate vs useref
function UseRef1() {
  const count = useRef(0);

  const increase = () => {
    count.current = count.current + 1;
    console.log(count.current);
  };
  return (
    <>
      <p>{count.current}</p>
      <button onClick={increase}>add</button>
    </>
  );
}

export default UseRef1;
