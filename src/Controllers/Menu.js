import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item active">Company</li>
        <li className="list-group-item">Home</li>
        <li className="list-group-item">Autores</li>
        <li className="list-group-item">Livros</li>
      </ul>
    );
  }
}
