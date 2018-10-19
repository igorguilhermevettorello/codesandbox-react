import React, { Component } from "react";
import ButtonDeletar from "../../Components/ButtonDeletar";
import ButtonEditar from "../../Components/ButtonEditar";

export default class Listagem extends Component {
  constructor(props) {
    super(props);
  }

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
          {this.props.lista.map(usuario => {
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
                    controller="usuarios"
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
