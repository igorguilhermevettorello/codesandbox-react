import React, { Component } from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: "div-menu sidebar hidden"
    };
    this.mostrar = this.mostrar.bind(this);
  }

  mostrar = () => {
    if (this.state.mostrar.indexOf("hidden") >= 0) {
      this.setState({
        mostrar: "div-menu sidebar show"
      });
    } else {
      this.setState({
        mostrar: "div-menu sidebar hidden"
      });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-light bg-nav">
          <div>
            <a
              onClick={this.mostrar}
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

        <div className="row mt-menu">
          <div className={this.state.mostrar}>
            <Menu />
          </div>
          <div className="col">
            <main>{this.props.children}</main>
          </div>
        </div>
      </div>
    );
  }
}
