import React from 'react';
import './index.css';


export default class FrontPage extends React.Component {


    render () {
        return (

            <div className="container" id="front">
            <div className="w3-container w3-blue band"></div>
                <div className="w3-cell-row w3-center" id="centerdiv">
                        <div className="w3-cell w3-cell-middle" id="frontcell1">
                                <i className="fas fa-paw" style="float:left;"></i><br />
                                <i className="fas fa-paw" style="float:right;"></i><br />
                                <i className="fas fa-paw" style="float:left;"></i><br />
                                <i className="fas fa-paw" style="float:right;"></i><br />
                        </div>
                        <div className="w3-cell w3-cell-middle" id="frontcell2">
                            <h1>ani<i className="fas fa-binoculars" id="logo"></i>al tracks</h1>
                            <p>neighbors helping neighbors</p>
                        </div>
                </div>
                      
                <div className="w3-cell-row" id="frontpageicons">
                        <div className="w3-cell w3-button w3-ripple iconrow1">
                            <i className="fas fa-user-circle"></i>
                            <p>Log-in<br/>Sign-up</p>
                        </div>
                        <div className="w3-cell w3-button w3-ripple iconrow1">
                            <i className="fas fa-binoculars"></i>
                            <p>Sightings<br />Feed</p>
                        </div>
                        <div className="w3-cell w3-button w3-ripple iconrow1">
                            <i className="fas fa-exclamation-circle"></i>
                            <p>Post Lost<br />Animal</p>
                        </div>
                        <div className="w3-cell w3-button w3-ripple iconrow1">
                            <i className="far fa-eye"></i>
                            <p>Post New<br />Sighting</p>
                        </div>
                </div>
            
                <div className="w3-container w3-blue band" id="footerband"></div>
            </div>
        );
    }
};