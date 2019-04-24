import React, { Component } from "react";
import API from "../API";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  updateUserInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="login">
        <label for="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={this.updateUserInput}
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.updateUserInput}
        />
      </div>
    );
  }
}

export default Login;
