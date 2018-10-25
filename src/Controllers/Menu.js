import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="">Usuários</Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuario" className="ml20">
            Cadastrar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuarios" className="ml20">
            Listar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="">Modalidades</Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuario" className="ml20">
            Cadastrar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuarios" className="ml20">
            Listar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="">Competições</Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuario" className="ml20">
            Cadastrar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuarios" className="ml20">
            Listar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/times">Times</Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuario" className="ml20">
            Cadastrar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuarios" className="ml20">
            Listar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/jogos">Jogos</Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuario" className="ml20">
            Cadastrar
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/usuarios" className="ml20">
            Listar
          </Link>
        </li>
      </ul>
    );
  }
}
