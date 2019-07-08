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
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyARHY5YXsaUpv_QuPJUxNYFYzW7A4JBMDE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
        icon={'paws.png'}
      />
    )}
  </GoogleMap>
));

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "React & GoogleMap Test" };
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

const rootElement = document.getElementById("root");
ReactDOM.render(<MyComponent />, rootElement);
