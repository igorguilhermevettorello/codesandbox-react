import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  IndexRoute,
  browserHistory
} from "react-router-dom";

import App from "./Controllers/App";
import Home from "./Controllers/Home";
import UsuariosBox from "./Controllers/Usuarios/UsuariosBox";
import ModalidadeBox from "./Controllers/Modalidades/ModalidadeBox";
import CompeticoesBox from "./Controllers/Competicoes/CompeticoesBox";
import JogosBox from "./Controllers/Jogos/JogosBox";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={browserHistory}>
    <App>
      <Switch>
        <Route path="/" exact={true} />
        <Route path="/home" component={Home} />
        <Route path="/usuarios/:id" exact={true} component={UsuariosBox} />
        <Route path="/usuarios" exact={true} component={UsuariosBox} />
        <Route path="/modalidades/:id" component={ModalidadeBox} />
        <Route path="/modalidades" component={ModalidadeBox} />
        <Route path="/competicoes/:id" component={CompeticoesBox} />
        <Route path="/competicoes" component={CompeticoesBox} />
        <Route path="/times/:id" component={ModalidadeBox} />
        <Route path="/times" component={ModalidadeBox} />
        <Route path="/jogos/:id" component={JogosBox} />
        <Route path="/jogos" component={JogosBox} />
      </Switch>
    </App>
  </Router>,
  rootElement
);
