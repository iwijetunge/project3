import React from "react";
import './index.css';
//import all components to go into shelldiv

const Navshell = props => (

    <div className="w3-blue" id="mainarea">

        <div className="w3-bar w3-blue" id="iconbar">
            <div className="w3-bar-item w3-right w3-button w3-ripple iconrow">
                <i className="fas fa-exclamation-circle"></i>
                <p>Post Lost<br />Animal</p>
            </div>
            <div className="w3-bar-item w3-right w3-button w3-ripple iconrow">
                <i className="far fa-eye"></i>
                <p>Post New<br />Sighting</p>
            </div>
            <div className="w3-bar-item w3-right w3-button w3-ripple iconrow">
                <i className="fas fa-binoculars"></i>
                <p>Sightings<br />Feed</p>
            </div>
        </div>

            <div id="shelldiv">
            </div>

    </div>


);

export default Navshell;
