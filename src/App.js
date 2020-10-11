import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../src/container/Home/Home";
import { Provider } from "react-redux";
import store from "../src/config/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
}

export default App;
