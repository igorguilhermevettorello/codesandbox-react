import React, { Component } from "react";
import Formulario from "./Formulario";
import Listagem from "./Listagem";
import $ from "jquery";

export default class ModalidadeBox extends Component {
  constructor() {
    super();
    this.state = { lista: [] };
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar = () => {
    $.ajax({
      method: "GET",
      async: false,
      url: "https://projeto-node-api.herokuapp.com/modalidades",
      success: function(response) {
        this.setState({ lista: response.jogos });
      }.bind(this),
      error: function(error) {
        console.log("error", error);
        this.setState({ lista: [] });
      }.bind(this)
    });
  };

  componentDidMount() {
    this.atualizar();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Jogos</div>
        <div className="card-body">
          <Formulario callbackAtualizar={this.atualizar} />
          <Listagem lista={this.state.lista} />
        </div>
      </div>
    );
  }
}
