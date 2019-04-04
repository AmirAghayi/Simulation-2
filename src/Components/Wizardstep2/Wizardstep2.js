import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImageurlType } from '../../redux/reducers/reducer';
import "./Wizardstep2.css";




class Wizardstep2 extends Component {
    constructor() {
      super();
  
      this.state = {
        imageUrl: ""
      }

    }
  
  
  
    handleimageUrlChange = event => {
      this.setState({
        imageUrl: event.target.value
      });
    };
  
   
  
  
    resetState = () => {
      this.setState({
        imageUrl: ""

      });
    };
  
  
    
handleDispatchers = () => {
  this.props.updateImageurlType(this.state.imageUrl);
}




    render() {
  
      return (
        <div className="main-content">
          
  
          <div className="imageUrl">
              <p className="imageUrl-title">Image URL</p>
                <input 
                  className="imageUrl-input" 
                  placeholder="Image URL" 
                  value={this.state.imageUrl}
                  onChange={this.handleimageUrlChange}
                  />
          </div>
  
          <div className="buttons">
               <div  className="previous-step-button">
                   <Link to="/Wizard/step1">
                       <button>Previous Step</button>
                   </Link>
                   
               </div>
               
               <div  className="next-step-button">
                  <Link to="/Wizard/step3">
                      <button
                      onClick={this.handleDispatchers}
                      >Next Step</button>
                  </Link>
                   
               </div>
                
          </div>
          
        </div>
      );
    }
  }
  

function mapStateToProps(state){
  return state;
};


  export default connect (mapStateToProps, {updateImageurlType})(Wizardstep2);