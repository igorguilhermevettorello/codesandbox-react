import React, { Component } from "react";

export default class Autores extends Component {
  constructor () {
    super();
    this.state = {lista:[
      {id:1, nome:"a", email: "b", password:"c"},
      {id:2, nome:"aa", email: "bb", password:"cc"}
    ]};
    //https://projeto-node-api.herokuapp.com/autores
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Autores</div>
        <div className="card-body">
          <form>
            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Nome
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Nome"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>

            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Email
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Email"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>

            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Senha
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                aria-label="Senha"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="pull-right mb5">
              <button type="button" className="btn btn-primary btn-sm">
                Salvar
              </button>
            </div>
            <div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.lista.map(autor => {
                      return (
                        <tr>
                          <th>{autor.id}</th>
                          <td>{autor.nome}</td>
                          <td>{autor.email}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
