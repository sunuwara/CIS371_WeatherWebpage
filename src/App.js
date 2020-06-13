import React, { Component } from "react";
import Header from "./components/layout/Header";
import Location from "./components/Location";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Location />
        </div>
      </div>
    );
  }
}

export default App;
