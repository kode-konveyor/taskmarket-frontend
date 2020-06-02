import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import ReactGA from "react-ga";
import MainPage from "./main/MainPage";

ReactGA.initialize("UA-151042094-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
