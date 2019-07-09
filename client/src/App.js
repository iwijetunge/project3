import React, { Component } from 'react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import CurrentLocation from './Map';
import {Jumbotron} from 'reactstrap';
import { BrowserRouter, Route } from "react-router-dom";
import {SignupPage, LoginPage} from './pages/auth';
import FeedPage from './pages/FeedPage';
import PostingPage from './pages/PostingPage';
import FrontPage from './pages/FrontPage';
//import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <BrowserRouter>
        <div className="App-header">
          <Route exact path="/feed" component={FeedPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/front" component={FrontPage} />
          <Route exact path="/posting" component={PostingPage} />
{ /*          <Route exact path="/posting" component={() => <PostForm new={true}/>} /> */ }
          <Route exact path="/" component={FrontPage} />
        </div>
        </BrowserRouter>
      {/* <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
          </InfoWindow>
          </CurrentLocation> */}
      </div>
    );
  }
}

export default App;