import React, { Component } from "react";
import Navigation from "./nav";
import "./theme.scss";

class App extends Component {
  render() {
    return (
      <div className="theme1">
        <div className="container">
          <div className="left">
            <Navigation />
          </div>
          <div className="right">
            <button className="button">Button</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
