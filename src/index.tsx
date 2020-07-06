import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import * as serviceWorker from "./serviceWorker";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./HomePage";
import Fav from "./Fav";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/"></RouterPage>
        <RouterPage pageComponent={<Fav />} path="/fav"></RouterPage>
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
