import React, { Component } from "react";
import Menu from "./Menu";
import AutorBox from "./Autores/AutorBox";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row m0 p0">
          <div className="col-4 m0 p0">
            <Menu />
          </div>
          <div className="col-8 m0 p15">
            <AutorBox />
          </div>
        </div>
      </div>
    );
  }
}
