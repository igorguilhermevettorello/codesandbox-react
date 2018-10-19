import React, { Component } from "react";
import Formulario from "./Formulario";
import Listagem from "./Listagem";
import axios from "axios";

export default class UsuariosBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      id: this.props.match.params.id
    };
    this.atualizar = this.atualizar.bind(this);
    this.setId = this.setId.bind(this);
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

  setId = id => {
    this.setState({
      id: id
    });
  };

  componentDidMount = () => {
    this.atualizar();
  };

  componentWillReceiveProps = (prevProps, prevState) => {
    this.setId(prevProps.match.params.id);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Usuários : Código : {this.state.id}</div>
        <div className="card-body">
          <Formulario callbackAtualizar={this.atualizar} id={this.state.id} />
          <Listagem
            callbackAtualizar={this.atualizar}
            lista={this.state.lista}
          />
        </div>
      </div>
    );
  }
}
