import React, { Component } from "react";
import "./House.css";

export default function house(props) {
  const { house } = props;

  return (
    <div className="House">
      <h1>Property Name: {house.property_name}</h1>
      <h2>Address: {house.address}</h2>
      <h2>City: {house.city}</h2>
      <h2>State: {house.state}</h2>
      <h2>Zip Code: {house.zip}</h2>
    </div>
  );
}
