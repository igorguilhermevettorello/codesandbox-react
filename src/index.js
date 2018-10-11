import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Controllers/App";
import "./styles.css";
import { Route, Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/livros/" component={App} />
      <Route path="/jogos/" component={App} />
    </Switch>
  </Router>,
  rootElement
);
