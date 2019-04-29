import React, { Component } from "react";
import API from "../API";

class CreateAccount extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordValidation: ""
  };

  createAccount = () => {
    if (this.state.password !== this.state.passwordValidation) {
      console.log("Passwords don't match. Please check and try again");
    } else {
      API.createAccount(this.state)
        .then(data => {
          this.props.signin(data.first_name);
        })
        .catch(err => console.log(err));
    }
  };

  updateUserInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="login">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={this.updateUserInput}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={this.updateUserInput}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
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
        <label htmlFor="passwordValidation">Confirm Password</label>
        <input
          type="password"
          name="passwordValidation"
          id="passwordValidation"
          onChange={this.updateUserInput}
        />
        <button onClick={this.createAccount}>Create Account</button>
      </div>
    );
  }
}

export default CreateAccount;
