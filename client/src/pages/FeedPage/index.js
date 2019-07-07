import React from 'react';
import {Col, Row, Container, Jumbotron} from 'reactstrap'
import API from '../../util/API';
import ResultsCard from '../../components/ResultsCard';

export default class FeedPage extends React.Component {
    state = {
        sightings: []
    }

    fetchSightings = () => (
        API.getAllSightings()
            // .then(sightings => console.log(sightings))
            .then( sightings => this.setState({sightings: sightings}))
    )
    componentDidMount () {
        this.fetchSightings();
    }
    
    render () {
        return (
        <Container>
            <Row>
                <Col md={12}>
                    <Jumbotron>
                        <h1>Welcome to Animal Trax</h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {
                        this.state.sightings.map( (sighting, id) => (
                            <ResultsCard sighting={sighting} key={id}/>
                        ))
                    }
                </Col>
            </Row>
        </Container>
        );
    }
}