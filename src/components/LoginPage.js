import React, { Component } from "react";
import API from "../API";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  updateUserInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    API.siginin(this.state).then(console.log);
  };

  render() {
    return (
      <div className="login">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={this.updateUserInput}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.updateUserInput}
        />
        <button onClick={this.handleSubmit}>Login</button>
        <Link to="/createaccount">Create Account</Link>
      </div>
    );
  }
}

export default Login;
