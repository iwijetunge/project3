import React from 'react';
import { Col, Row, Container, Jumbotron } from 'reactstrap'
import API from '../../util/API';
import ResultsCard from '../../components/ResultsCard';
import Header from "../../components/Header";
import NavShell from "../../components/NavShell";


export default class FeedPage extends React.Component {
    state = {
        sightings: []
    }

    fetchSightings = () => (
        API.getAllSightings()
            // .then(sightings => console.log(sightings))
            .then(sightings => this.setState({ sightings: sightings }))
    )
    componentDidMount() {
        this.fetchSightings();
    }

    render() {
        return (
            <div>
                <Header>
                </Header>
                <NavShell></NavShell>
                    <div>
                                {
                                    this.state.sightings.map((sighting, id) => (
                                        <ResultsCard sighting={sighting} key={id} />
                                    ))
                                }
                    </div>
            </div>
        );
    }
}