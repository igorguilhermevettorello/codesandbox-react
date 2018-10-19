import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

import InputPassword from "../../Components/InputPassword";
import InputText from "../../Components/InputText";
import MensagemErro from "../../Components/MensagemErro";
import MensagemFormulario from "../../Components/MensagemFormulario";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      login: "",
      email: "",
      password: ""
    };
    this.setLogin = this.setLogin.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.salvar = this.salvar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  setLogin = event => {
    this.setState({ login: event.target.value });
  };

  setEmail = event => {
    this.setState({ email: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  limpar = () => {
    // this.setState({
    //   id: "",
    //   login: "",
    //   email: "",
    //   password: ""
    // });
    return false;
  };

  enviar = event => {
    event.preventDefault();
    this.salvar();
  };

  salvar = () => {
    let usuario = {
      login: this.state.login,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post(`https://projeto-node-api.herokuapp.com/usuarios`, usuario)
      .then(res => {
        PubSub.publish("mensagem-formulario", {
          divClass: "success",
          mensagem: "Registro salvo com sucesso."
        });

        this.setState({
          id: "",
          login: "",
          email: "",
          password: ""
        });
        this.props.callbackAtualizar();
      })
      .catch(error => {
        PubSub.publish("mensagem-formulario", {
          divClass: "danger",
          mensagem: "Falha ao salvar registro."
        });

        if (error.response.status === 400) {
          new MensagemErro().publicar(error.response.data.error);
        } else {
          console.log("error", error.response);
        }
      });
  };

  render() {
    return (
      <form method="post">
        <MensagemFormulario />

        <InputText
          id="login"
          type="text"
          name="login"
          value={this.state.login}
          onChange={this.setLogin}
          label="Login"
          autocomplete="username"
        />

        <InputText
          id="email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.setEmail}
          label="Email"
          autocomplete="username"
        />

        <InputPassword
          id="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.setPassword}
          label="Senha"
          autocomplete="current-password"
        />

        <div className="pull-right mb5">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.enviar}
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}
