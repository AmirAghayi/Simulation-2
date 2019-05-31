import React from "react";
import { Link } from "react-router-dom";
import "./Wizard.css";
import { Route } from  'react-router-dom';
import Wizardstep1 from '../Wizardstep1/Wizardstep1';
import Wizardstep2 from '../Wizardstep2/Wizardstep2';
import Wizardstep3 from '../Wizardstep3/Wizardstep3';





export default function Wizard (props) {
  console.log(props.match)
return (

  
      <div className="main-content">

            <div className="Add-Listing">
              <h1 className="Add-Listing-Title"> Add New Listing </h1>
                  <Link to="/">
                        <button 
                        className="Cancel-Button"
                        > Cancel </button>
                  </Link>
            </div>

                  <Route component={Wizardstep1} path={props.match.path+'/step1'} />
                  <Route component={Wizardstep2} path={props.match.path+'/step2'} />
                  <Route component={Wizardstep3} path={props.match.path+'/step3'} />

      </div>


   );
}

