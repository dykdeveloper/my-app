import { Component } from "react";
import "./App.css";
import FirstClass from "./class_base_component/FirstClass";
import First from "./function_base_component/First";
import Component1 from "./class_lifecycle/Component";
import FunctionProp from "./function_props/FunctionProp";
import FunctionValidate from "./function_validation/FunctionValidate";
import FunctionEvent from "./function_event/FunctionEvent";
import UseState1 from "./hook/UseState1";
import UseEffect1 from "./hook/UseEffect1";
import List1 from "./lists/List1";
import TodoApp from "./lists/TodoApp";
import Form1 from "./form/Form1";
import Form2 from "./form/Form2";
import UseRef1 from "./hook/UseRef_UseState";
import UseRefhook from "./hook/UseRef1";
import Styling1 from "./styling_css/Styling1";
import LiftState from "./Lifting_Stateup/LifState";
import Fragment1 from "./fragment/Fragment";
import Forward1 from "./hook/forwardref/Forward1";

function App() {
  return (
    <>
      {/* <FirstClass /> */}
      {/* <First /> */}
      {/* <Component1 /> */}
      {/* <FunctionProp /> */}
      {/* <FunctionValidate /> */}
      {/* <FunctionEvent /> */}
      {/* <UseState1 /> */}
      {/* <UseEffect1 /> */}
      {/* <List1 /> */}
      {/* <TodoApp /> */}
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <UseRefhook /> */}
      {/* <Styling1 /> */}
      {/* <UseRef1 /> */}
      {/* <LiftState /> */}
      {/* <Fragment1 /> */}
      <Forward1 />
    </>
  );
}

export default App;
