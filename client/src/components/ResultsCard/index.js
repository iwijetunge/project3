import React from 'react'

const ResultsCard = props => (
    <div>
        <p>{props.sighting.animalType}</p>
        <p>{props.sighting.location.coordinates}</p>
        <p>{props.sighting.datetime}</p>
        <p>{props.sighting.status}</p>
        <p>{props.sighting.dangerous}</p>
        <p>{props.sighting.isMissing}</p>
        <p>{props.sighting.isWild}</p>
        <p>{props.sighting.imageUrl}</p>
        <p>{props.sighting.comment}</p>
    </div>
);

export default ResultsCard;