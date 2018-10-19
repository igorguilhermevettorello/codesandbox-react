import React, { Component } from "react";

export default class Listagem extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.props.lista.map(autor => {
            return (
              <tr key={autor.id.toString()}>
                <th>{autor.id}</th>
                <td>{autor.nome}</td>
                <td>{autor.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
