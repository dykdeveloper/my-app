import React, { Component } from "react";
import Fclass from "../class_base_component/FirstClass";

export default class component extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      data: false,
    };
  }

  addnumber = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  printdata = () => {
    this.setState({
      data: !this.state.data,
    });
  };

  render() {
    return (
      <>
        <div>Number: {this.state.number}</div>
        <button onClick={() => this.addnumber()}>add number</button>

        <div>printdata:</div>
        <div>{this.state.data}</div>
        <button onClick={() => this.printdata()}>print data</button>
        {this.state.data ? <Fclass /> : ""}
      </>
    );
  }
}
