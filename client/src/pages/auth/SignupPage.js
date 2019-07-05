import React from 'react';
import {Container, Col, Row, Input, Form, Button, Jumbotron} from 'reactstrap';
import axios from 'axios';

class SignupPage extends React.Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
    }

    validateFormInfo = () => {
        const rules = [
            state => state.username.length >= 3,
            state => state.password.length >= 6,
            state => state.confirmPassword === state.password,
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
        axios.post('/auth/signup', this.state) 
    }

    render () {
        return (
            <Container>
                <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Form>
                        <Jumbotron>
                            <h3>Signup to start tracking!</h3>
                            <Input 
                                value={this.state.username}
                                placeholder="Enter Username"
                                onChange={this.handleInput("username")}

                            />
                            <Input 
                                value={this.state.password}
                                placeholder="Enter Password"
                                onChange={this.handleInput("password")}

                            />
                            <Input 
                                value={this.state.confirmPassword}
                                placeholder="Confirm Password"
                                onChange={this.handleInput("confirmPassword")}
                            />
                            <Button onClick={this.handleSubmit}>
                                Sign Up!
                            </Button>
                            <p>Already a tracker?</p>
                            <a href="/login">Login here!</a>
                        </Jumbotron>
                    </Form>
                </Col>
                <Col md={3}></Col>
                </Row>
            </Container>
        )
    }
} 

export default SignupPage;