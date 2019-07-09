import React from 'react';
import {Container, Col, Row, Input, Form, Button, Jumbotron} from 'reactstrap';
import axios from 'axios';

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
    }

    validateFormInfo = () => {
        const rules = [
            state => state.username.length >= 3,
            state => state.password.length >= 6,
        ];

        if (rules.map(rule => rule(this.state)).every()) {
            return true;
        }
        else return false;
    }
    handleInput = field => event => {
        this.setState({[field]: event.target.value})
    }
    handleSubmit = () => {
        axios.post('/auth/login', this.state) 
            .then( result => localStorage.setItem("token", result.data.token))

    }

    render () {
        return (
            <Container>
                <Row>
                <Col md={3}></Col>
                <Col md={6}>
                <br/>

                        <Jumbotron className="w3-blue">
                          <Form>
                            <h3><i className="fas fa-paw paw2"></i>&nbsp;Animal Tracks: Log-in</h3><br/>
                            <Input value={this.state.username} placeholder="Enter Username" 
                                onChange={this.handleInput("username")} />
                            <br/>
                            <Input value={this.state.password} placeholder="Enter Password"
                                onChange={this.handleInput("password")} />
                            <br/>
                            <Button onClick={this.handleSubmit}> Log In! </Button>
                            <br/><br/>
                            <p>Don't have an account? <a href="/Signup">Create an account here!</a></p>
                          </Form>
                        </Jumbotron>
                </Col>
                <Col md={3}></Col>
                </Row>
            </Container>
        )
    }
}

export default LoginPage;