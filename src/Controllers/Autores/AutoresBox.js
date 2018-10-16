import React, { Component } from "react";
import Formulario from "./Formulario";
import Listagem from "./Listagem";
import $ from "jquery";

export default class AutoresBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      id: this.props.match.params.id
    };
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar = () => {
    $.ajax({
      method: "GET",
      async: false,
      url: "https://projeto-node-api.herokuapp.com/autores",
      success: function(response) {
        this.setState({ lista: response.autores });
      }.bind(this),
      error: function(error) {
        console.log("error", error);
        this.setState({ lista: [] });
      }.bind(this)
    });
  };

  componentDidMount() {
    this.atualizar();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Autores</div>
        <div className="card-body">
          <Formulario callbackAtualizar={this.atualizar} id={this.state.id} />
          <Listagem lista={this.state.lista} />
        </div>
      </div>
    );
  }
}
