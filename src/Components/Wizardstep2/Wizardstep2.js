import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
            imageuRL: event.target.value
          });
    };
  
   
  
  
    resetState = () => {
      this.setState({
        imageUrl: ""

      });
    };
  
  
    
    render() {
  
      return (
        <div className="Wizard main-content">
          
  
          <div className="imageUrl">
              <p className="imageUrl-title">Image URL</p>
                <input 
                type="text"
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
                      <button>Next Step</button>
                  </Link>
                   
               </div>
                
          </div>
          
        </div>
      );
    }
  }
  
  export default Wizardstep2;