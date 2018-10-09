import React, { Component } from "react";
import ListaAutores from "./ListaAutores";

export default class Autores extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Autores</div>
        <div className="card-body">
          <form>
            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Nome
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Nome"
                aria-describedby="inputGroup-sizing-sm"
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
                className="form-control"
                aria-label="Email"
                aria-describedby="inputGroup-sizing-sm"
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
                className="form-control"
                aria-label="Senha"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="pull-right mb5">
              <button type="button" className="btn btn-primary btn-sm">
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
