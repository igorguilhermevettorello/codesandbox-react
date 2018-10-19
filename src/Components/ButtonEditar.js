import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ButtonEditar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      url: `/${this.props.controller}/${this.props.id}`
    };
  }

  render() {
    return (
      <Link
        className="btn btn-primary btn-sm"
        to={this.state.url}
        onClick={this.editar}
      >
        {this.props.label}
      </Link>
    );
  }
}
