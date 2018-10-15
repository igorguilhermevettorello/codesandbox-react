import React, { Component } from "react";
import $ from "jquery";
import InputNumber from "../../Components/InputNumber";
import InputText from "../../Components/InputText";
import InputDateTime from "../../Components/InputDateTime";
import MensagemErro from "../../Components/MensagemErro";
import MensagemFormulario from "../../Components/MensagemFormulario";
import PubSub from "pubsub-js";

export default class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      modalidade: ""
    };
    this.setModalidade = this.setModalidade.bind(this);
    this.salvar = this.salvar.bind(this);
  }

  setModalidade(event) {
    this.setState({ modalidade: event.target.value });
  }

  salvar = event => {
    event.preventDefault();

    $.ajax({
      url: "https://projeto-node-api.herokuapp.com/modalidades",
      contentType: "application/json",
      dataType: "json",
      type: "post",
      data: JSON.stringify({
        modalidade: this.state.modalidade
      }),
      success: function(resposta) {
        PubSub.publish("mensagem-formulario", {
          divClass: "success",
          mensagem: "Registro salvo com sucesso."
        });

        this.setState({
          modalidade: ""
        });
        this.props.callbackAtualizar();
      }.bind(this),
      error: function(error) {
        PubSub.publish("mensagem-formulario", {
          divClass: "danger",
          mensagem: "Falha ao salvar registro."
        });

        if (error.status === 400) {
          new MensagemErro().publicar(error.responseJSON.error);
        } else {
          console.log("error", error);
        }
      }
    });
  };

  render() {
    return (
      <form method="post">
        <MensagemFormulario />

        <InputText
          id="modalidade"
          type="text"
          name="modalidade"
          value={this.state.modalidade}
          onChange={this.setModalidade}
          label="Modalidade"
          autocomplete="username"
        />

        <div className="pull-right mb5">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.salvar}
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}
