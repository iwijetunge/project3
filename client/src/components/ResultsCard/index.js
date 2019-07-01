import React from "react";
import './index.css';


const ResultsCard = props => (

  <div className="w3-card w3-light-gray posting">

    <div className="w3-bar">
        <div class="w3-bar-item w3-mobile topline">
            <p><b>Category: </b>Danger!</p>
        </div>
        <div className="w3-bar-item w3-mobile topline">
            <p><b>Type: </b>AngryBird</p>
        </div>
        <div className="w3-bar-item w3-mobile topline">
            <p><b>Date/Time: </b>Now</p>
        </div>
        <div className="w3-bar-item w3-mobile topline">
            <p><b>Location: </b>My house</p>
        </div>
    </div>

    <div className="w3-container detailrow">
        <div className="parag">
            <p>Cat ipsum dolor sit amet, i shall purr myself to sleep use lap as chair. Run as fast as i can
                into another room behind the couch for no reason, groom, have beauty sleep, stretch. Cough
                hairball, eat toilet paper, grass smells good skid on floor, crash into wall, stretch
                tongue, blep. Rub face on everything, bleghblegh vomit my furball tickle my belly at your
                own peril i will pester for food when you're in the kitchen even if it's salad trip owner up
                i want food.</p>
        </div>
        <div className="pics">
            <img src="paw.jpg" alt="paw print" className="w3-card pic" />
            <img src="pointer.jpg" alt="map pointer" className="w3-card point" />
        </div>
    </div>

  </div>

);

export default ResultsCard;
