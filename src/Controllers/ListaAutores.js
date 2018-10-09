import React, { Component } from "react";
import $ from "jquery";

export default class ListaAutores extends Component {
  constructor() {
    super();
    this.state = { lista: [] };
  }

  componentDidMount() {
    $.ajax({
      method: "GET",
      url: "https://projeto-node-api.herokuapp.com/autores",
      success: function(response) {
        this.setState({ lista: response.autores });
      }.bind(this),
      error: function(error) {
        console.log("error", error);
        this.setState({ lista: [] });
      }
    });
  }

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
          {this.state.lista.map(autor => {
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
