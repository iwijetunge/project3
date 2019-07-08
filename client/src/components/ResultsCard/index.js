import React from 'react'

const ResultsCard = props => (


    <div className="w3-card w3-light-gray posting">
                <div className="w3-bar bar">
                    <div className="w3-bar-item w3-mobile topline">
                        <p><b>Type: </b>{props.sighting.animalType}</p>
                    </div>
                    <div className="w3-bar-item w3-mobile topline">
                        <p><b>Date/Time: </b>{props.sighting.datetime}</p>
                    </div>
                    <div className="w3-bar-item w3-mobile topline">
                        <p><b>Location: </b>{props.sighting.location.coordinates}</p>
                    </div>
                </div>

                <div className="w3-bar bar">
                    <div className="w3-bar-item w3-mobile topline">
                        <p><b>|</b>{props.sighting.status}</p>
                    </div>
                    <div className="w3-bar-item w3-mobile topline">
                        <p><b>|</b>{props.sighting.dangerous}</p>
                    </div>
                    <div className="w3-bar-item w3-mobile topline">
                        <p><b>|</b>{props.sighting.isMissing}</p>
                    </div>
                    <div className="w3-bar-item w3-mobile topline">
                        <p><b>|</b>{props.sighting.isWild}</p>
                    </div>
                </div>

                <div className="w3-bar detailrow">
                        <p className="w3-bar-item parag">{props.sighting.comment}</p>
                    <div className="w3-bar-item pics">
                        <img src={props.sighting.imageUrl} alt="animal picture" class="w3-card pic" />
                        <img src="pointer.jpg" alt="map pointer" class="w3-card point" />
                    </div>
                </div>

    </div>

);

export default ResultsCard;

