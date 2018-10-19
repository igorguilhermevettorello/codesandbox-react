import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class ButtonDeletar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      controller: this.props.controller
    };
    this.deletar = this.deletar.bind(this);
  }

  deletar = event => {
    event.preventDefault();

    axios
      .delete(
        `https://projeto-node-api.herokuapp.com/${this.state.controller}/${
          this.state.id
        }`
      )
      .then(res => {
        PubSub.publish("mensagem-formulario", {
          divClass: "success",
          mensagem: "Registro excluído com sucesso."
        });
        this.props.callbackAtualizar();
      })
      .catch(error => {
        PubSub.publish("mensagem-formulario", {
          divClass: "danger",
          mensagem: "Falha ao excluir registro."
        });
        console.log("error", error);
      });
  };

  render() {
    return (
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={this.deletar}
      >
        {this.props.label}
      </button>
    );
  }
}
