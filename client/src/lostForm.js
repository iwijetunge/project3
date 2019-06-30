import React from 'react';
import API from '../../util/API';
import { Input, Button, Form, FormGroup, Label, Col, Row, Container, Jumbotron } from 'reactstrap'
export default class EditLost extends React.Component {
    state = {
        animalType: "",
        petName: "",
        Location: "",
        Date: "",
        Time: "",
        Desc: "",
        Image: "",
        Phone: "",
        Email: "",
    }
    handleInput = field => event => {
        const { value } = event.target;
        this.setState({
            [field]: value
        })
    }
    clearForm = () => {

    }
    submitLost = () => {
        const newLost = {
            animalType: this.state.animalType,
            petName: this.state.petName,
            Location: this.state.Location,
            Date: this.state.Date,
            Time: this.state.Time,
            Desc: this.state.Desc,
            Image: this.state.Image,
            Phone: this.state.Phone,
            Email: this.state.Email,
        }
        API.createLost(newLost)
            .then(() => this.clearForm())
    }
    render() {
        return (
            this.props.new ?
                <Container>
                    <Jumbotron><h1>Report a Lost Animal</h1></Jumbotron>
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
                                    <option>Dog</option>
                                    <option>Cat</option>
                                    <option>Reptile</option>
                                    <option>Bird</option>
                                    <option>Farm</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="petName">Pet Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="petName"
                                    value={this.state.petName}
                                    onChange={this.handleInput("petName")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastLocation">Last Known Location</Label>
                                <Input
                                    type="text"
                                    name="location"
                                    id="lastLocation"
                                    value={this.state.Location}
                                    onChange={this.handleInput("Location")}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="lostDate">Date Last Seen</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="lostDate"
                                    value={this.state.Date}
                                    onChange={this.handleInput("Date")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lostTime">Time Last Seen</Label>
                                <Input
                                    name="time"
                                    value={this.state.Time}
                                    onChange={this.handleInput("Time")}
                                    id="lostTime"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lostDesc">Description</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    id="lostDesc"
                                    placeholder="Include details and useful information about the lost animal."
                                    value={this.state.Desc}
                                    onChange={this.handleInput("Desc")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="contactPhone">Contact Phone Number</Label>
                                <Input
                                    type="text"
                                    name="phone"
                                    id="contactPhone"
                                    value={this.state.Phone}
                                    onChange={this.handleInput("Phone")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="contactEmail">Contact Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="contactEmail"
                                    value={this.state.Email}
                                    onChange={this.handleInput("Email")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lostImg">Image</Label>
                                <Input
                                    type="file"
                                    name="file"
                                    id="lostImg"
                                    value={this.state.Image}
                                    onChange={this.handleInput("Image")}
                                />
                                <FormText color="muted">
                                    Add an image to help others identify your animal.
                            </FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button onClick={this.submitLost}>
                                Submit
                        </Button>
                        </Col>
                    </Row>
                </Container >
                : null
        )
    }
}