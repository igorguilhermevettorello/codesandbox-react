import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Select extends Component {
  constructor() {
    super();
    this.state = {
      invalid: null,
      mensagem: null,
      options: [
        { id: 1, descricao: "Futebol" },
        { id: 2, descricao: "Basquete" }
      ]
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
          <label className="input-group-text" for={this.props.id}>
            {this.props.label}
          </label>
        </div>
        <select
          autoComplete={this.props.autocomplete}
          id={this.props.id}
          className={`custom-select form-control ${this.state.invalid}`}
          aria-label={this.props.label}
          value={this.props.value}
          onChange={this.props.onChange}
          onFocus={this.limpar}
        >
          {this.state.options.map((x, y) => (
            <option key={y.id}>{x.descricao}</option>
          ))}
        </select>
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
