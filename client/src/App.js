import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div className="App">
        
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        <BrowserRouter>
        <div className="App-header">
          <route exact path="/" component={() => < />} />
          <route exact path="/feed" component={FeedPage} />
          <route exact path="/login" component={LoginPage} />
          <route exact path="/front" component={FrontPage} />
          <route exact path="/posting" component={PostingPage} />
          <route exact path="/new" component={() => <new= { true} />} />
          <route exact path="/" component={({ match }) => <div>Editing {match.params.id}</div>}/>
        </div>
        </BrowserRouter>
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
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
      </CurrentLocation>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
