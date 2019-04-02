import React, { Component } from "react";
import "./Wizardstep3.css";
import axios from 'axios';




class Wizardstep3 extends Component {
    constructor() {
      super();
  
      this.state = {
        monthlyMortgageAmount: 0,
        desiredMonthlyRent: 0
      }

    }
  
  
  
    handleMortgageChange = event => {
          this.setState({
            monthlyMortgageAmount: event.target.value
          });
    };
  
   
    handleRentChange = event => {
        this.setState({
            desiredMonthlyRent: event.target.value
          });
    };



  
  
    resetState = () => {
      this.setState({
        monthlyMortgageAmount: 0,
        desiredMonthlyRent: 0
      });
    };
  
  



    createHouse = () => {
        const { property_name, address, city, state, zipcode } = this.state;
        const house = {
          property_name,
          address,
          city,
          state,
          zipcode
        }
    
        axios.post('api/house', house)
        .then(response => {
             this.props.history.push('/');
        });
        this.resetState();
      };
    




    
    render() {
  
      return (
        <div className="Wizard main-content">
          
  
          <div className="monthly-mortgage">
              <p className="monthly-mortgage-title">Monthly Mortgage Amount</p>
                <input 
                type="number"
                className="monthly-mortgage-input" 
                placeholder="0" 
                value={this.state.monthlyMortgageAmount}
                onChange={this.handleMortgageChange}
                />
          </div>
  
          <div className="desired-rent">
              <p className="desired-rent-title">Desired Monthly Rent</p>
                <input 
                type="number"
                className="desired-rent-input" 
                placeholder="0" 
                value={this.state.desiredMonthlyRent}
                onChange={this.handleRentChange}
                />
          </div>

          <div>
            
            <button 
            className="complete-button"
            onClick={this.createHouse}
            >Complete
            </button>
          

          </div>

          
        </div>
      );
    }
  }
  
  export default Wizardstep3;