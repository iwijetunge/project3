import React from "react";
import './index.css';

//ADD CHILD PROPS LINE BEFORE FINAL CLOSING DIV

const ViewResults = props => (

  <div id="feeddiv">
    <div>
        <h2>Animal Postings In Your Area</h2>
        <h5><b>Filter by:</b>
            <input type="checkbox" name="general" value="general" className="filterbox" />General Sightings
            <input type="checkbox" name="danger" value="danger" className="filterbox" />Danger Risk
            <input type="checkbox" name="stray" value="stray" className="filterbox" />Stray Animals Sighted
            <input type="checkbox" name="missing" value="missing" className="filterbox" />Missing Animal Posts
        </h5>
        <hr />
    </div>


  </div>
);

export default ViewResults;
