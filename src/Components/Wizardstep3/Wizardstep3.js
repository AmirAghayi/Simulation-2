import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgageamountType } from '../../redux/reducers/reducer';
import { updateMonthlyrentType } from '../../redux/reducers/reducer';
import "./Wizardstep3.css";
import axios from 'axios';




class Wizardstep3 extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        monthlyMortgageAmount: props.monthlyMortgageAmount || 0,
        desiredMonthlyRent: props.desiredMonthlyRent || 0
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
        const {
          property_name,
          address,
          city,
          state,
          zipcode,
          imageUrl,
        } = this.props;
        const { monthlyMortgageAmount, desiredMonthlyRent } = this.state;
        const house = {
          property_name,
          address,
          city,
          state,
          zipcode,
          imageUrl,
          monthlyMortgageAmount,
          desiredMonthlyRent,
        };
    
        axios.post('/api/house', house)
        .then(response => {
          console.log(response.data)
             this.props.history.push('/');
        });
        this.resetState();
      };
    

handleDisptchers = () => {
  this.props.updateMortgageamountType(this.state.monthlyMortgageAmount);
  this.props.updateMonthlyrentType(this.state.desiredMonthlyRent);
}


    
    render() {
      console.log(this.props)
      return (
        <div className="main-content">
          
  
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
                <div  className="previous-step-button_div">
                   <Link to="/Wizard/step2">
                       <button
                       className="previous-step-button" 
                       onClick={this.handleDisptchers}>Previous Step</button>
                   </Link>
                   
                </div>

                <div>
            
                  <Link to="/">
                      <button 
                      className="complete-button"
                      onClick={this.createHouse}
                      >Complete
                      </button>
                  </Link>
                   
          

                </div>

           </div>

                

          
        </div>
      );
    }
  }
  

function mapStateToProps(state){
  return state;
}



  export default connect (mapStateToProps, {updateMortgageamountType, updateMonthlyrentType}) (Wizardstep3);