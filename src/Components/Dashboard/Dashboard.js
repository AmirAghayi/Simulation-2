import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard-title" >Dashboard</div>

        <div>
          <House />
        </div>

        <Link to="/Wizard">
          <button className="Add_Property_button"> Add New Property </button>
        </Link>

        <hr className="dividing-line"/>
      </div>
    );
  }
}

export default Dashboard;
