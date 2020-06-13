import React, { Component } from "react";
// import ReactDOM from "react-dom";

class Header extends Component {
  render() {
    return (
      <header className="blog-header py-3 text-dark text-center">
        <div className="row flex-nowrap justify-content-between ">
          <h1 className="col-4 blog-header-logo">Weather Forecast</h1>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/61nuuPxUvaL.png"
            alt="header-logo"
            height="60"
            width="60"
          />
          <h2 className="col-4">By: Aron Sunuwar</h2>
        </div>
      </header>
    );
  }
}

export default Header;
