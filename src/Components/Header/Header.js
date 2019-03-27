import React, { Component } from "react";
import "./Header.css";
import houser_logo from "./logo/houser_logo.png";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="Logo"  src={houser_logo} alt="Logo"
        />
        <h1 className="Header-Text">Houser</h1>
      </div>
    );
  }
}

export default Header;
