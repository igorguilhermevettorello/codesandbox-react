import React, { Component } from "react";

export default class InputCustomizado extends Component {
  render() {
    return (
      <div className="input-group input-group-sm mb5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Nome
          </span>
        </div>
        <input
          type="{this.props.type}"
          autoComplete="{this.props.autoComplete}"
          className="form-control"
          aria-label="Nome"
          aria-describedby="inputGroup-sizing-sm"
          value={this.props.value}
          onChange={this.props.onChange}
          id="{this.props.id}"
        />
      </div>
    );
  }
}
