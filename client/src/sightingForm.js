import React from 'react';
import API from '../../util/API';
import { Input, Button, Form, FormGroup, Label, Col, Row, Container, Jumbotron } from 'reactstrap'
export default class EditSighting extends React.Component {
    state = {
        animalType: "",
        Location: "",
        Date: "",
        Time: "",
        Desc: "",
        Image: "",
    }
    handleInput = field => event => {
        const { value } = event.target;
        this.setState({
            [field]: value
        })
    }
    clearForm = () => {

    }
    submitSighting = () => {
        const newSighting = {
            animalType: this.state.animalType,
            Location: this.state.Location,
            Date: this.state.Date,
            Time: this.state.Time,
            Desc: this.state.Desc,
            Image: this.state.Image,
        }
        API.createSighting(newSighting)
            .then(() => this.clearForm())
    }
    render() {
        return (
            this.props.new ?
                <Container>
                    <Jumbotron><h1>Create and Share Sightings</h1></Jumbotron>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Animal Type</Label>
                                <Input
                                    type="select"
                                    name="type"
                                    value={this.state.animalType}
                                    onChange={this.handleInput("animalType")}
                                >
                                    <option>Mammal</option>
                                    <option>Bird</option>
                                    <option>Reptile</option>
                                    <option>Insect</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="sightingLocation">Location</Label>
                                <Input
                                    type="text"
                                    name="location"
                                    id="sightingLocation"
                                    value={this.state.Location}
                                    onChange={this.handleInput("Location")}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="sightingDate">Date of Sighting</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="sightingDate"
                                    value={this.state.Date}
                                    onChange={this.handleInput("Date")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="sightingTime">Date of Sighting</Label>
                                <Input
                                    name="time"
                                    value={this.state.Time}
                                    onChange={this.handleInput("Time")}
                                    id="sightingTime"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="sightingDesc">Description</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    id="sightingDesc"
                                    placeholder="Include details and useful information about the sighting"
                                    value={this.state.Desc}
                                    onChange={this.handleInput("Desc")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="sightingImg">Image</Label>
                                <Input
                                    type="file"
                                    name="file"
                                    id="sightingImg"
                                    value={this.state.Image}
                                    onChange={this.handleInput("Image")}
                                />
                                <FormText color="muted">
                                    Add an image of the sighting
                            </FormText>
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
                : null
        )
    }
}