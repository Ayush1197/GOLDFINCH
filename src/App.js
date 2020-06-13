import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Time from "./components/time";
import Currency from "./components/currency";
import Data from "./components/data";
import Counter from "./components/counter"

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>CODING TASK BY GOLDFINCH</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-danger btn-sm m-2">
                <Link className="nav-link" to={"/home"}>HOME</Link></button>
              </li>
              <li className="nav-item">
              <button className="btn btn-primary btn-sm m-2">
                <Link className="nav-link" to={"/counter"}>COUNTER</Link></button>
              </li>
              <li className="nav-item">
              <button className="btn btn-info btn-sm m-2">
                <Link className="nav-link" to={"/time"}>TIMER</Link></button>
              </li>
              <li className="nav-item">
              <button className="btn btn-default btn-sm m-2">
                <Link className="nav-link" to={"/data"}>DATA</Link></button>
              </li>
              <li className="nav-item">
              <button className="btn btn-success btn-sm m-2">
                <Link className="nav-link" to={"/currency"}>CURRENCY</Link></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/time" component={Time} />
            <Route path="/data" component={Data} />
            <Route path="/currency" component={Currency} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
