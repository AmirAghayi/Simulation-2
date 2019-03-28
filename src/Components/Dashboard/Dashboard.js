import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      housesList: []
    };
  }


  componentDidMount(){
    this.getHouses();
  }



  getHouses = () => {
    axios.get('/api/houses')
    .then( response => {
      this.setState({
        housesList: response.data
      });
    });
  }






  render() {
    const mappedHouseList = this.state.housesList.map((house, i)=> {
          return (
             <House
             key={house.id}
             house={house}
             />
            );
    });


    return (
      <div className="Dashboard">
        <div className="Dashboard-title" >{mappedHouseList}</div>

        <Link to="/Wizard">
          <button className="Add_Property_button"> Add New Property </button>
        </Link>

        <hr className="dividing-line"/>
      </div>
    );
  }
}

export default Dashboard;
