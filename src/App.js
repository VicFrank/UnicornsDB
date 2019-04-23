import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import NoMatch from "./components/NoMatch.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
