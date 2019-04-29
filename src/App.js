import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import CreateAccount from "./components/CreateAccount";

class App extends Component {
  state = {
    userFirstName: ""
  };

  signin = userFirstName => this.setState({ userFirstName });

  signout = () => {
    this.setState({ userFirstName: "" });
  };

  render() {
    const { signin } = this;

    return (
      <Router>
        <div className="main-layout">
          <Route path="/" />
          <Route
            path="/login"
            render={props => <LoginPage {...props} signin={signin} />}
          />
          <Route
            path="/createaccount"
            render={props => <CreateAccount {...props} signin={signin} />}
          />
          <Route path="/trips" />
          <Route path="/newtrip" />
        </div>
      </Router>
    );
  }
}

export default App;
