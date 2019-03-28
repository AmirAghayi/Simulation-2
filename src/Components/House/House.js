import React, { Component } from "react";
import "./House.css";

export default function house(props) {
  const { house } = props;

  return (
    <div className="House">
      <h1>{house.property_name}</h1>
      <h2>{house.address}</h2>
      <h2>{house.city}</h2>
      <h2>{house.state}</h2>
      <h2>{house.zip}</h2>
    </div>
  );
}
