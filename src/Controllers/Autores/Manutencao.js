import React, { Component } from "react";
import Formulario from "./Formulario";
import Listagem from "./Listagem";

export default class Manutencao extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">Autores</div>
        <div className="card-body">
          <Formulario />
          <Listagem />
        </div>
      </div>
    );
  }
}
