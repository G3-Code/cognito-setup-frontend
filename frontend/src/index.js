import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "../src/components/App";
import Amplify from "aws-amplify";
import config from "./aws-exports";
//import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

Amplify.configure(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
