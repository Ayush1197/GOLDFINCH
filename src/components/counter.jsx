import React, { Component } from "react";
  
  class Counter extends Component {
    state = {
      count: 0
    };
    handleInClick = () => {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    };
    handleDeClick = () => {
        this.setState(({ count }) => ({
          count: count - 1
      }));
    };
    render() {
      return (
        <div>
        <h2>Welcome to Counter</h2>
        <button className="btn btn-warning btn-sm m-2" onClick={this.handleInClick}>ADD(+)</button>
        <button className="btn btn-primary btn-sm m-2">Value={this.state.count}</button>
        <button className="btn btn-danger btn-sm m-2" onClick={this.handleDeClick}>SUBSTARCT(-)</button>
        </div>
        );
    }
  }
  
  export default Counter;