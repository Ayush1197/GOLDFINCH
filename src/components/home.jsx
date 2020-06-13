import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (

            <div>
                <h1>Choose any option:</h1>    
                <Link className="nav-link" to={"/counter"}>COUNTER</Link>
                <Link className="nav-link" to={"/time"}>TIMER</Link>
                <Link className="nav-link" to={"/data"}>FETCH USER DATA</Link>
                <Link className="nav-link" to={"/currency"}>CURRENCY CONVERTOR</Link>
            </div>
        );
    }
}
