import React, { Component } from "react";
import ButtonDeletar from "../../Components/ButtonDeletar";
import ButtonEditar from "../../Components/ButtonEditar";
import axios from "axios";

export default class Listagem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar = () => {
    axios
      .get(`https://projeto-node-api.herokuapp.com/usuarios`)
      .then(res => {
        this.setState({ lista: res.data.usuarios });
      })
      .catch(error => {
        console.log("error", error);
        this.setState({ lista: [] });
      });
  };

  componentDidMount = () => {
    this.atualizar();
  };

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Código</th>
            <th scope="col">Login</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.lista.map(usuario => {
            return (
              <tr key={usuario.id.toString()}>
                <th>
                  <ButtonDeletar
                    id={usuario.id}
                    label="Deletar"
                    controller="usuarios"
                    callbackAtualizar={this.props.callbackAtualizar}
                  />

                  <ButtonEditar
                    id={usuario.id}
                    label="Editar"
                    controller="usuario"
                  />
                </th>
                <th>{usuario.id}</th>
                <td>{usuario.login}</td>
                <td>{usuario.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
