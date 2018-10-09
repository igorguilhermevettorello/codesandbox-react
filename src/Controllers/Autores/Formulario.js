import React, { Component } from "react";
import $ from "jquery";
import InputCustomizado from "../../Components/InputCustomizado";

export default class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      password: ""
    };
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.salvar = this.salvar.bind(this);
  }

  setNome(event) {
    this.setState({ nome: event.target.value });
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }

  setPassword(event) {
    this.setState({ password: event.target.value });
  }

  salvar = event => {
    event.preventDefault();

    $.ajax({
      url: "https://projeto-node-api.herokuapp.com/autores",
      contentType: "application/json",
      dataType: "json",
      type: "post",
      data: JSON.stringify({
        nome: this.state.nome,
        email: this.state.email,
        password: this.state.password
      }),
      success: function(resposta) {
        console.log("enviado com sucesso");
      }.bind(this),
      error: function(resposta) {
        console.log("erro");
      }
    });
  };

  render() {
    return (
      <form method="post">
        <InputCustomizado
          id="nome"
          type="text"
          name="nome"
          value={this.state.nome}
          onChange={this.setNome}
          label="Nome"
          autocomplete="username"
        />

        <InputCustomizado
          id="email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.setEmail}
          label="Email"
          autocomplete="username"
        />

        <InputCustomizado
          id="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.setPassword}
          label="Senha"
          autocomplete="current-password"
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