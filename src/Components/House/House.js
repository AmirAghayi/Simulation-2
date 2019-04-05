import React from "react";
import "./House.css";

export default function house(props) {
  const { removeHouse, house } = props;

  return (
    <div className="House">
      <span>
        <img className="image" src={house.image} alt="No Photos Available" />
      </span>

      <div className="house_info">

          <div className="close_button">
            <button
              className="close-btn"
              type="button"
              onClick={() => removeHouse(house.id)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        <p className="property_name_tag">
          Property Name: {house.property_name}
        </p>
        <p className="address_tag">Address: {house.address}</p>
        <p className="city_tag">City: {house.city}</p>
        <p className="state_tag">State: {house.state}</p>
        <p className="zip_tag">Zip Code: {house.zip}</p>
        <p className="mortgage_tag">
          Monthly Mortgage: {house.monthly_mortgage_amount}
        </p>
        <p className="rent_tag">Desired Rent: {house.desired_rent}</p>
      </div>


      


    </div>
  );
}
