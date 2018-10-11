import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class InputDateTime extends Component {
  constructor() {
    super();
    this.state = {
      invalid: null,
      mensagem: null
    };
    this.limpar = this.limpar.bind(this);
  }

  limpar = () => {
    this.setState({
      invalid: null,
      mensagem: null
    });
  };

  render() {
    return (
      <div className="input-group input-group-sm mb5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            {this.props.label}
          </span>
        </div>
        <input
          type="datetime-local"
          autoComplete={this.props.autocomplete}
          className={`form-control ${this.state.invalid}`}
          aria-label={this.props.label}
          aria-describedby="inputGroup-sizing-sm"
          value={this.props.value}
          onChange={this.props.onChange}
          id={this.props.id}
          onFocus={this.limpar}
        />
        <div className="invalid-feedback">{this.state.mensagem}</div>
      </div>
    );
  }

  componentDidMount() {
    PubSub.subscribe("error-validacao", (topico, error) => {
      if (error.campo === this.props.id) {
        this.setState({
          invalid: "is-invalid",
          mensagem: error.mensagem
        });
      }
    });
  }
}
