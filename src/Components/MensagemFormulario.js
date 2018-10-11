import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class MensagemFormulario extends Component {
  constructor() {
    super();
    this.state = {
      divClass: "hidden",
      mensagem: null
    };
    this.limpar = this.limpar.bind(this);
  }

  limpar = () => {
    this.setState({
      divClass: "hidden",
      mensagem: null
    });
  };

  render() {
    return (
      <div className={this.state.divClass} role="alert">
        <strong>{this.state.mensagem}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={this.limpar}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }

  componentDidMount() {
    PubSub.subscribe("mensagem-formulario", (topico, mensagem) => {
      this.setState({
        divClass: `alert alert-${mensagem.divClass}`,
        mensagem: mensagem.mensagem
      });
    });
  }
}
