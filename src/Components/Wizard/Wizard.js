import React from "react";
import { Link } from "react-router-dom";
import "./Wizard.css";
import { Switch,Route } from  'react-router-dom';
import Wizardstep1 from './Components/Wizardstep1/Wizardstep1';
import Wizardstep2 from './Components/Wizardstep2/Wizardstep2';
import Wizardstep3 from './Components/Wizardstep3/Wizardstep3';





export default function Wizard () {
  
return (

  
      <div className="Wizard main-content">

            <div className="Add-Listing">
              <h1 className="Add-Listing-Title"> Add New Listing </h1>
              <Link to="/">
                  <button 
                  className="Cancel-Button"
                  > Cancel </button>
              </Link>
            </div>

            <Switch>
                  <Route component={Wizardstep1} path="/Wizard/step1" />
                  <Route component={Wizardstep2} path="/Wizard/step2" />
                  <Route component={Wizardstep3} path="/Wizard/step3" />
            </Switch>

      </div>


   );
}

