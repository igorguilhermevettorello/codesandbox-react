import React, { Component } from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-light bg-nav">
          <div>
            <a
              data-target="#sidebar"
              data-toggle="collapse"
              className="btn btn-sm btn-menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </a>
            <span className="color-white">Sistema Online de Jogos</span>
          </div>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-menu dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Igor
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </nav>

        <div className="row d-flex d-md-block flex-nowrap wrapper mt-menu">
          <div
            className="col-md-3 float-left col-1 pl-0 pr-0 collapse width show"
            id="sidebar"
          >
            <div className="list-group border-0 card text-center text-md-left">
              <Menu />
            </div>
          </div>
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}
