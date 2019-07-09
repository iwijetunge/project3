import React from 'react'
import API from '../../util/API';
import './index.css';
import { Input, Button, Form, FormGroup, Label, Col, Row, Container, Jumbotron } from 'reactstrap'


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
        Image: "",
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
                <Container>
                    <h1>Post Sightings</h1>
                    <br/>
                    <Row>
                        <Col md={6}>

                            <FormGroup>
                                <Label>Animal Type</Label>
                                <Input
                                    type="select"
                                    name="animalType"
                                    id="animalType"
                                    value={this.state.animalType}
                                    onChange={this.handleInput("animalType")}
                                >
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
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="sightingLocation">Location</Label>
                                <Input
                                    type="location"
                                    name="lat"
                                    placeholder="Lat"
                                    // id="sightingLocation"
                                    value= {this.state.lat}
                                    onChange={this.handleInput("lat")}
                                />
                                                                <Input
                                    type="location"
                                    name="long"
                                    placeholder="Long"
                                    // id="sightingLocation"
                                    value= {this.state.long}
                                    onChange={this.handleInput("long")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    <h4>
                                    Is Wild:
                                    </h4>
                                <input
                                        name="isWild"
                                        type="checkbox"
                                        value={true}
                                        // checked={this.state.isWild}
                                        onChange={this.handleInput("isWild")} />
                                </label>
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    <h4>
                                    Is Dangerous:
                                    </h4>
                                <input
                                        name="isDangerous"
                                        type="checkbox"
                                        value={true}
                                        // checked={this.state.isDangerous}
                                        onChange={this.handleInput("isDangerous")} />
                                </label>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="sightingDate">Date of Sighting</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    // id="sightingDate"
                                    value={this.state.Date}
                                    onChange={this.handleInput("Date")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="sightingTime">Time of Sighting</Label>
                                <Input
                                    name="time"
                                    type="time"
                                    value={this.state.Time}
                                    onChange={this.handleInput("Time")}
                                // id="sightingTime"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="comment">Description</Label>
                                <Input
                                    type="textarea"
                                    name="comment"
                                    id="comment"
                                    placeholder="Include details and useful information about the sighting"
                                    value={this.state.comments}
                                    onChange={this.handleInput("comments")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="sightingImg">Image</Label>
                                <Input
                                    type="text"
                                    name="image"
                                    id="imageUrl"
                                    value={this.state.Image}
                                    onChange={this.handleInput("Image")}
                                />
                                {/* <FormText color="muted"> */}
                                Add a link to the image of the sighting
                            {/* </FormText> */}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button onClick={this.submitSighting}>
                                Create Sighting
                        </Button>
                        </Col>
                    </Row>
                </Container>
        )
    }
} 

// const PostForm = props => (

//   <div id="makepost">
//     <h2>Post an Animal Sighting or Lost Animal</h2>
//       <div id="postform">

//         <div id="postform1">
//           <input type="checkbox" name="danger" value="danger" className="inputA " />&nbsp;Danger Alert
//           <br/>
//           <input type="checkbox" name="missing" value="missing" className="inputA" />&nbsp;Missing Animal
//           <br/>
//           <input type="radio" id="wild" value="false" name="domesticwild" className="inputA" /><label for="wild">&nbsp;Wild&nbsp;</label>
//           <input type="radio" id="domestic" value="false" name="domesticwild" className="inputA" /><label for="domestic">&nbsp;Domestic</label>
//           <br/>
//           <select className="inputA boxinput" title="Type of animal">
            // <option>Bear</option>
            // <option>Bobcat</option>
            // <option>Cat</option>
            // <option>Chicken</option>
            // <option>Coyote</option>
            // <option>Deer</option>
            // <option>Dog</option>
            // <option>Duck</option>
            // <option>Fox</option>
            // <option>Mountain Lion</option>
            // <option>Raccoon</option>
            // <option>Rat</option>
            // <option>Snake</option>
            // <option>Turkey</option>
            // <option>Turtle</option>
            // <option>Wolf</option>
            // <option>OTHER- explain in "other info"</option>
//           </select>
//           <br/>
//           <input placeholder="Location" name="location" className="inputA boxinput" title="Location of sighting or last known location of a missing pet" />
//           <br/>
//           <input type="date" name="date" className="inputA boxinput" title="Date of sighting or date missing"/>
//         </div>

//         <div id="postform2">
//             <label for="wild">Other relevant info:</label><br/>
//             <textarea rows="7" name="animaldetails" className="inputA boxinput" placeholder="tip: for lost animal, include owner's contact info..." ></textarea>
//         </div>

//         <div id="postform3">
//             <h6>Upload photo</h6>
//             <br/>
//             <input placeholder="upload photo" name="photo" type="file" className="inputA boxinput" value=""  title="Upload image" />
//             <input className="w3-hover-light-blue inputA" type="submit" style="margin-top:40px;margin-right:6px;" />
//         </div>
//   </div>
// </div>
// );

// export default PostForm;
