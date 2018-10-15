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
      modalidade: "",
      campeonato: "",
      rodada: "",
      datahora: "",
      partida: "",
      casa: "",
      visitante: ""
    };
    this.setModalidade = this.setModalidade.bind(this);
    this.setCampeonato = this.setCampeonato.bind(this);
    this.setRodada = this.setRodada.bind(this);
    this.setDatahora = this.setDatahora.bind(this);
    this.setPartida = this.setPartida.bind(this);
    this.setCasa = this.setCasa.bind(this);
    this.setVisitante = this.setVisitante.bind(this);
    this.salvar = this.salvar.bind(this);
    this.isInteger = this.isInteger.bind(this);
    this.convertInteger = this.convertInteger.bind(this);
  }

  convertInteger = valor => {
    valor = parseInt(valor);
    if (valor < 0 || isNaN(valor)) {
      valor = 0;
    }
    return valor;
  };

  setModalidade(event) {
    this.setState({ modalidade: event.target.value });
  }

  setCampeonato(event) {
    this.setState({ campeonato: event.target.value });
  }

  setRodada(event) {
    event.target.value = this.convertInteger(event.target.value);
    this.setState({ rodada: event.target.value });
  }

  setDatahora(event) {
    this.setState({ datahora: event.target.value });
  }

  setPartida(event) {
    event.target.value = this.convertInteger(event.target.value);
    this.setState({ partida: event.target.value });
  }

  setCasa(event) {
    this.setState({ casa: event.target.value });
  }

  setVisitante(event) {
    this.setState({ visitante: event.target.value });
  }

  isInteger = event => {
    let keys = [
      8,
      9,
      37,
      39,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105
    ];
    if (keys.indexOf(event.keyCode) < 0) {
      event.preventDefault();
    }
  };

  salvar = event => {
    event.preventDefault();

    $.ajax({
      url: "https://projeto-node-api.herokuapp.com/jogos",
      contentType: "application/json",
      dataType: "json",
      type: "post",
      data: JSON.stringify({
        modalidade: this.state.modalidade,
        campeonato: this.state.campeonato,
        rodada: this.state.rodada,
        datahora: this.state.datahora,
        partida: this.state.partida,
        casa: this.state.casa,
        visitante: this.state.visitante
      }),
      success: function(resposta) {
        PubSub.publish("mensagem-formulario", {
          divClass: "success",
          mensagem: "Registro salvo com sucesso."
        });

        this.setState({
          modalidade: "",
          campeonato: "",
          rodada: "",
          datahora: "",
          partida: "",
          casa: "",
          visitante: ""
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

        <InputText
          id="campeonato"
          type="text"
          name="campeonato"
          value={this.state.campeonato}
          onChange={this.setCampeonato}
          label="Campeonato"
          autocomplete="username"
        />

        <InputNumber
          id="rodada"
          type="number"
          name="rodada"
          value={this.state.rodada}
          onChange={this.setRodada}
          onKeyDown={this.isInteger}
          label="Rodada"
          autocomplete="username"
        />

        <InputDateTime
          id="datahora"
          type="datetime-local"
          name="datahora"
          value={this.state.datahora}
          onChange={this.setDatahora}
          label="Data / hora"
          autocomplete="username"
        />

        <InputNumber
          id="partida"
          type="number"
          name="partida"
          value={this.state.partida}
          onChange={this.setPartida}
          onKeyDown={this.isInteger}
          label="Partida"
          autocomplete="username"
        />

        <InputText
          id="casa"
          type="text"
          name="casa"
          value={this.state.casa}
          onChange={this.setCasa}
          label="Time da casa"
          autocomplete="username"
        />

        <InputText
          id="visitante"
          type="text"
          name="visitante"
          value={this.state.visitante}
          onChange={this.setVisitante}
          label="Time visitante"
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
