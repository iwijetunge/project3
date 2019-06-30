import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from './GoogleMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <GoogleMap from={{lat: 41.85, lng: -87.65}} to={{lat: 39.79, lng: -86.14}}/>
      </div>
    );
  }
}

export default App;
