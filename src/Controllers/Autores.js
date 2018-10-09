import React, { Component } from "react";
import ListaAutores from "./ListaAutores";
import $ from "jquery";

export default class Autores extends Component {
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
      <div className="card">
        <div className="card-header">Autores</div>
        <div className="card-body">
          <form method="post">
            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Nome
                </span>
              </div>
              <input
                type="text"
                autoComplete="username"
                className="form-control"
                aria-label="Nome"
                aria-describedby="inputGroup-sizing-sm"
                value={this.state.nome}
                onChange={this.setNome}
                id="nome"
              />
            </div>

            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Email
                </span>
              </div>
              <input
                type="text"
                autoComplete="username"
                className="form-control"
                aria-label="Email"
                aria-describedby="inputGroup-sizing-sm"
                value={this.state.email}
                onChange={this.setEmail}
                id="email"
              />
            </div>

            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Senha
                </span>
              </div>
              <input
                type="password"
                autoComplete="current-password"
                className="form-control"
                aria-label="Senha"
                aria-describedby="inputGroup-sizing-sm"
                value={this.state.password}
                onChange={this.setPassword}
                id="password"
              />
            </div>
            <div className="pull-right mb5">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.salvar}
              >
                Salvar
              </button>
            </div>
            <div>
              <ListaAutores />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
