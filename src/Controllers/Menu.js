import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item active">Company</li>
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/autores">Autores</Link>
        </li>
        <li className="list-group-item">
          <Link to="/jogos">Jogos</Link>
        </li>
        <li className="list-group-item">
          <Link to="/modalidades">Modalidades</Link>
        </li>
        <li className="list-group-item">
          <Link to="/competicoes">Competições</Link>
        </li>
      </ul>
    );
  }
}
