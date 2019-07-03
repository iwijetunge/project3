import React from "react";
import './index.css';

//ADD CHILD PROPS LINE JUST ABOVE FINAL CLOSING DIV

const ViewResults = props => (

  <div id="feeddiv"> 
  <div>
      <h2>Animal Postings In Your Area</h2>
      <div className="w3-cell-row">
      <h5 className="w3-cell w3-cell-middle w3-gray w3-mobile"><b>Filter<br/>by:</b></h5>

          <span className="w3-cell w3-cell-middle  w3-mobile filterspan">
                  <label for="danger1">Danger<br/>Alert</label>
                  <br/><input type="checkbox" name="danger1" value="danger" className="inputC " />
          </span>
          
          <span className="w3-cell w3-cell-middle  w3-mobile filterspan">
                  <label for="missing1">Missing<br/>Animal</label>
                  <br/><input type="checkbox" name="missing1" value="missing" className="inputC" />
          </span>
          
          <span className="w3-cell w3-cell-middle w3-mobile filterspan">
              <h6><label for="wild1">Wild&nbsp;</label><input type="radio" id="wild1" value="false" name="domesticwild1" className="inputC" /></h6>
              <h6><label for="domestic1">Domestic&nbsp;</label><input type="radio" id="domestic1" value="false" name="domesticwild1" className="inputC" /></h6>
          </span>

          <span className="w3-cell w3-cell-middle w3-mobile filterspan">
              <select className="inputC searchinput" title="Type of animal">
                  <option>Bear</option>
                  <option>Bobcat</option>
                  <option>Cat</option>
                  <option>Chicken</option>
                  <option>Coyote</option>
                  <option>Deer</option>
                  <option>Dog</option>
                  <option>Duck</option>
                  <option>Fox</option>
                  <option>Mountain Lion</option>
                  <option>Raccoon</option>
                  <option>Rat</option>
                  <option>Snake</option>
                  <option>Turkey</option>
                  <option>Turtle</option>
                  <option>Wolf</option>
                  <option>ALL OTHERS</option>
              </select>
              <br/>
              <input placeholder="Location" name="location1" className="inputC searchinput" title="location" />

          </span>
          

          <span className="w3-cell w3-cell-middle w3-mobile filterspan">
              from: <input type="date" name="date1" className="inputC searchinput" title="from this date..."/>
              <br/>
              to: <input type="date" name="date2" className="inputC searchinput" title="...to this date"/>
          </span>

      </div>
      <hr />
  </div>


  </div>
);

export default ViewResults;



