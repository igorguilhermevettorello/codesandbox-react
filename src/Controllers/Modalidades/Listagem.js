import React, { Component } from "react";

export default class Listagem extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {this.props.lista.map(autor => {
            return (
              <tr key={autor.id.toString()}>
                <th>{autor.id}</th>
                <td>{autor.modalidade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
