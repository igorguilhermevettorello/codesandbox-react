import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item active">Company</li>
        <li className="list-group-item">
          <a href="#">Home</a>
        </li>
        <li className="list-group-item">
          <a href="/autores">Autores</a>
        </li>
        <li className="list-group-item">
          <a href="/jogos">Jogos</a>
        </li>
      </ul>
    );
  }
}
