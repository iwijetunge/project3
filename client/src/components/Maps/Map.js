import ReactDOM from "react-dom";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=""&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "200px", width:"200px" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lng }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: props.lat, lng: props.lng }}
        onClick={props.onMarkerClick}
        icon={'paws.png'}
      />
    )}
  </GoogleMap>
));

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "ReactGoogleMap" };
  }

  render() {
    return (
      <div>
        
        <MyMapComponent
          isMarkerShown={true}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
    );
  }
}

export default MyMapComponent

