import React, { Component } from 'react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import CurrentLocation from './Map';
import {Jumbotron} from 'reactstrap';
import { BrowserRouter, Route } from "react-router-dom";
import {SignupPage, LoginPage} from './pages/auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        
          <div className="main">
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;