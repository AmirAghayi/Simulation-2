import React, { Component } from "react";
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
  
          
        </div>
      );
    }
  }
  
  export default Wizardstep2;