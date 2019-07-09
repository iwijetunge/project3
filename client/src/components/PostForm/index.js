import React from 'react'
import API from '../../util/API';
import './index.css';


export default class PostForm extends React.Component {
    state = {
        animalType: "",
        lat: "",
        long:"",
        isWild: false,
        isDangerous:false,
        Date: "",
        Time: "",
        comment: "",
        imageUrl: "",
    }
    handleInput = field => event => {
        const { value } = event.target;
        this.setState({
            [field]: value
        })
    }
    // handleCheckbox(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    //   }
    clearForm = () => {

    }

    submitSighting = () => {
        const newSighting = {
            animalType: this.state.animalType,
            location: {
                "coordinates": 
                   [this.state.lat, this.state.long],
                "type": "Point"
                },
            // location: this.state.location,
            isWild: this.state.isWild,
            dangerous: this.state.isDangerous,
            Date: this.state.Date,
            Time: this.state.Time,
            comment: this.state.comments,
            imageUrl: this.state.Image,
        }
        API.createSighting(newSighting)
            .then(() => this.clearForm())
    }
    render() {
        return (
            <div id="makepost">
            <h2>Post an Animal Sighting or Lost Animal</h2>
            <br/>
              <div id="postform">
       
                <div id="postform1">
                   <label><b>Danger Alert: </b><input name="isDangerous" type="checkbox" 
                       value={true} // checked={this.state.isDangerous}
                       onChange={this.handleInput("isDangerous")} /> </label><br/>
                   <label><b>Wild Animal: </b><input name="isWild" type="checkbox" 
                       value={true} // checked={this.state.isWild}
                       onChange={this.handleInput("isWild")} /> </label><br/>
                   <label><b>Missing Animal: </b><input name="isMissing" type="checkbox" 
                       value={true} // checked={this.state.isMissing}
                       onChange={this.handleInput("isMissing")} /> </label><br/>
                   <label>Date<br/>
                       <input type="date" name="date" className="inputA" 
                           title="Date of sighting or date missing"
                           value={this.state.Date} onChange={this.handleInput("Date")} /> </label><br/>
                   <label>Time <br/>
                        <input type="time" name="time" className="inputA"
                            title="Time of day" value={this.state.Time} /*id="sightingTime" */
                            onChange={this.handleInput("Time")} /> </label>
               </div>
       
               <div id="postform2">
               <label>Animal Type:&nbsp;</label>
                   <select className="inputA" title="Type of animal" type="select" name="animalType"
                       value={this.state.animalType} onChange={this.handleInput("animalType")} >
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
                       <option>OTHER- explain in "other details"</option>
                   </select>
                   <br/>

                   <label>Other details <br/>
                       <textarea rows="7" name="comment" className="inputA" style={{minWidth:"380px"}}
                           placeholder="Any other relevant info. Tip: For lost animal, include owner's contact info..." 
                           value={this.state.comments} onChange={this.handleInput("comments")} >
                       </textarea> </label>
               </div>
       
               <div id="postform3">
               <label>Location: latitude <br/>
                   <input type="location" placeholder="latitude" name="lat" className="inputA" 
                       value= {this.state.lat} onChange={this.handleInput("lat")}
                       title="Latitude of sighting or last known location of a missing pet" /> </label>
                   <br/>
                   <label>Location: longitude <br/>
                   <input type="location" placeholder="longitude" name="long" className="inputA" 
                       value= {this.state.long} onChange={this.handleInput("long")}
                       title="Longitude of sighting or last known location of a missing pet" /> </label>
                    <br/>
                   <label>Add a link to the image <br/>
                       <input type="text" name="image" id="imageUrl" className="inputA"
                           placeholder="upload link to photo" title="image link"
                           value={this.state.imageUrl} onChange={this.handleInput("imageUrl")} />
                   </label>
                   <br/>
                   <input className="w3-hover-light-blue inputA" type="submit" onClick={this.submitSighting} />
               </div>
       
           </div>
       
       </div>
       
        );
    }
} 



