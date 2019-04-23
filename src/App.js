import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";

class App extends Component {
  state = {
    username: ""
  };

  signin = username => this.setState({ username });

  signout = () => {
    this.setState({ username: "" });
  };

  render() {
    return (
      <Router>
        <div className="main-layout">
          <Route path="/" />
          <Route
            path="/login"
            render={() => <LoginPage signin={this.signin} />}
          />
          <Route path="/trips" />
          <Route path="/newtrip" />
        </div>
      </Router>
    );
  }
}

export default App;
