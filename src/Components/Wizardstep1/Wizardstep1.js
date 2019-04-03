import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropertynameType } from '../../redux/reducers/reducer';
import { updateAddressType } from '../../redux/reducers/reducer';
import { updateCityType } from '../../redux/reducers/reducer';
import { updateStateType } from '../../redux/reducers/reducer';
import { updateZipcodeType } from '../../redux/reducers/reducer';
import "./Wizardstep1.css";



class Wizardstep1 extends Component {
    constructor() {
      super();
  
      this.state = {
        property_name: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
      }
    }
  
  
  
    handlePropertyNameChange = event => {
          this.setState({
            property_name: event.target.value
          });
    };
  
    handleAddressChange = event => {
      this.setState({
        address: event.target.value 
      });
    }
  
    handleCityChange = event => {
      this.setState({
        city: event.target.value 
      });
    }
  
  
    handleStateChange = event => {
      this.setState({
        state: event.target.value
      });
    }
  
  
    handleZipChange = event => {
      this.setState({
        zipcode: event.target.value
      });
    }
  
  
  
    resetState = () => {
      this.setState({
        property_name: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
      });
    };


  
    //Method to handle redux functions *- also known as dispatchers -*
    handleDispatchers = () => {
      this.props.updatePropertynameType(this.state.property_name);
      this.props.updateAddressType(this.state.address);
      this.props.updateCityType(this.state.city);
      this.props.updateStateType(this.state.state);
      this.props.updateZipcodeType(this.state.zipcode);
    } 
  
    
    render() {
  
      return (
        <div className="main-content">
          
  
          <div className="property-name">
              <p className="property-name-title">Property Name</p>
                <input 
                className="property-name-input" 
                placeholder="Property Name" 
                value={this.state.property_name}
                onChange={this.handlePropertyNameChange}
                />
          </div>
  
          <div className="Address">
              <p className="address-title">Address</p>
                <input 
                className="address-input" 
                placeholder="Address" 
                type="text"
                value={this.state.address}
                onChange={this.handleAddressChange}
                />
          </div>
          
          
          
          <div className="last-three">
  
              <div className="City">
                <p className="city-title">City</p>
                  <input 
                  className="city-input"  
                  placeholder="City" 
                  type="text"
                  value={this.state.city}
                  onChange={this.handleCityChange}
                  />
              </div>
  
  
              <div className="State">
                <p className="state-title">State</p>
                  <input 
                  className="state-input"  
                  placeholder="State" 
                  type="text"
                  value={this.state.state}
                  onChange={this.handleStateChange}
                  />
              </div>
  
              <div className="Zip">
                <p className="zip-title">Zip Code</p>
                  <input 
                  className="zip-input"  
                  placeholder="Zip Code" 
                  type="text"
                  value={this.state.zipcode}
                  onChange={this.handleZipChange}
                  />
              </div>
  
          </div>

            <div>
              <Link to="/Wizard/step2">
                    <button 
                    className="next-step" onClick={this.handleDispatchers}
                    >
                    Next Step
                    </button> 
              </Link>
            </div>
        </div>
      );
    }
  }


function mapStateToProps(state){
     return state;
};



  export default connect( mapStateToProps, {updatePropertynameType, updateAddressType, updateCityType, updateStateType, updateZipcodeType}) (Wizardstep1);