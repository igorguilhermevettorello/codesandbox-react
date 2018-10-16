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
import AutoresBox from "./Controllers/Autores/AutoresBox";
import JogosBox from "./Controllers/Jogos/JogosBox";
import ModalidadeBox from "./Controllers/Modalidades/ModalidadeBox";
import Home from "./Controllers/Home";

import "./styles.css";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={browserHistory}>
    <App>
      <Switch>
        <Route path="/" exact={true} />
        <Route path="/home" component={Home} />
        <Route path="/autores/:id" component={AutoresBox} />
        <Route path="/jogos/:id" component={JogosBox} />
        <Route path="/modalidades/:id" component={ModalidadeBox} />
      </Switch>
    </App>
  </Router>,
  rootElement
);
