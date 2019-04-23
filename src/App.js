import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <div className="App" />;
        <Route path="/" />
        <Route path="/login" />
        <Route path="/trips" />
        <Route path="/newtrip" />
      </Router>
    );
  }
}

export default App;
