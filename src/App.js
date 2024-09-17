import { Component } from "react";
import "./App.css";
import FirstClass from "./class_base_component/FirstClass";
import First from "./function_base_component/First";
import Component1 from "./class_lifecycle/Component";
import FunctionProp from "./function_props/FunctionProp";
import FunctionValidate from "./function_validation/FunctionValidate";
import FunctionEvent from "./function_event/FunctionEvent";
import UseState1 from "./hook/UseState1";

function App() {
  return (
    <>
      {/* <FirstClass /> */}
      {/* <First /> */}
      {/* <Component1 /> */}
      {/* <FunctionProp /> */}
      <FunctionValidate />
      {/* <FunctionEvent /> */}
      {/* <UseState1 /> */}
    </>
  );
}

export default App;
