import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizard.css";


class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }

  render() {
    return (
      <div className="Wizard main-content">
        <div className="Add-Listing">
          <h1 className="Add-Listing-Title"> Add New Listing </h1>
          <Link to="/">
            <button className="Cancel-Button"> Cancel </button>
          </Link>
        </div>

        <div className="property-name">
          <p className="prop-name-title">Property Name</p>
          <input className="prop-name-input" placeholder="Property Name" type="text"/>
        </div>

        <div className="Address">
          <p className="address-title">Address</p>
          <input className="address-input" placeholder="Address" type="text"/>
        </div>
        
        
        
        <div className="last-three">

            <div className="City">
              <p className="city-title">City</p>
              <input className="city-input"  placeholder="City" type="text"/>
            </div>

            <div className="State">
              <p className="state-title">State</p>
              <input className="state-input"  placeholder="State" type="text"/>
            </div>

            <div className="Zip">
              <p className="zip-title">Zip Code</p>
              <input className="zip-input"  placeholder="Zip Code" type="text"/>
            </div>

        </div>
        



        <div>
          <Link to="/">
            <button className="complete-button" >Complete</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Wizard;
