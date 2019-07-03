import React from "react";
import './index.css';


const PostForm = props => (

  <div id="makepost">
    <h2>Post an Animal Sighting or Lost Animal</h2>
      <div id="postform">

        <div id="postform1">
          <input type="checkbox" name="danger" value="danger" className="inputA " />&nbsp;Danger Alert
          <br/>
          <input type="checkbox" name="missing" value="missing" className="inputA" />&nbsp;Missing Animal
          <br/>
          <input type="radio" id="wild" value="false" name="domesticwild" className="inputA" /><label for="wild">&nbsp;Wild&nbsp;</label>
          <input type="radio" id="domestic" value="false" name="domesticwild" className="inputA" /><label for="domestic">&nbsp;Domestic</label>
          <br/>
          <select className="inputA boxinput" title="Type of animal">
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
            <option>OTHER- explain in "other info"</option>
          </select>
          <br/>
          <input placeholder="Location" name="location" className="inputA boxinput" title="Location of sighting or last known location of a missing pet" />
          <br/>
          <input type="date" name="date" className="inputA boxinput" title="Date of sighting or date missing"/>
        </div>

        <div id="postform2">
            <label for="wild">Other relevant info:</label><br/>
            <textarea rows="7" name="animaldetails" className="inputA boxinput" placeholder="tip: for lost animal, include owner's contact info..." ></textarea>
        </div>

        <div id="postform3">
            <h6>Upload photo</h6>
            <br/>
            <input placeholder="upload photo" name="photo" type="file" className="inputA boxinput" value=""  title="Upload image" />
            <input className="w3-hover-light-blue inputA" type="submit" style="margin-top:40px;margin-right:6px;" />
        </div>
  </div>
</div>
);

export default PostForm;
