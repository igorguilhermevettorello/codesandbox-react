import React, { Component } from "react";
import Menu from "./Menu";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.children);
  }
  render() {
    return (
      <div>
        <div className="row m0 p0">
          <div className="col-4 m0 p0">
            <Menu />
          </div>
          <div className="col-8 m0 p15">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
