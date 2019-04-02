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


  removeHouse = id => {
    console.log(id)
    axios.delete(`/api/house/${id}`)
      .then(response => {
         this.getHouses();
    });
  };



  render() {
    const mappedHouseList = this.state.housesList.map((house, i)=> {
          return (
             <House
             key={house.id}
             house={house}
             removeHouse={this.removeHouse}
             />
            );
    });


    return (
      <div className="Dashboard">
            
            <div className="Dashboard_header">
                <h1 className="Dashboard_title">Dashboard</h1>
                <Link to="/Wizard/step1">
                  <button className="Add_Property_button"> Add New Property </button>
                </Link>
            </div>
            
            <div className="dividing-line">
                 <hr />
            </div>
            
            <div className="home_listing">
                <p>Home Listing</p>
            </div>
            
            <div className="houses_list" >{mappedHouseList}</div>

        
      </div>
    );
  }
}

export default Dashboard;
