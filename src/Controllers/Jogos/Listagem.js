import React, { Component } from "react";
import { getDataBr, getHoras } from "../../Helpers/Helpers";

export default class Listagem extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">campeonato</th>
            <th scope="col">rodada</th>
            <th scope="col">partida</th>
            <th scope="col">data</th>
            <th scope="col">hora</th>
            <th scope="col">Time da casa</th>
            <th scope="col">Time visitante</th>
          </tr>
        </thead>
        <tbody>
          {this.props.lista.map(autor => {
            return (
              <tr key={autor.id.toString()}>
                <th>{autor.id}</th>
                <td>{autor.campeonato}</td>
                <td>{autor.rodada}</td>
                <td>{autor.partida}</td>
                <td>{getDataBr(autor.datahora)}</td>
                <td>{getHoras(autor.datahora)}</td>
                <td>{autor.casa}</td>
                <td>{autor.visitante}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
