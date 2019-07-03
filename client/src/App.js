import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from './GoogleMap'

class App extends Component {
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
        <GoogleMap from={{lat: 41.85, lng: -87.65}} to={{lat: 39.79, lng: -86.14}}/>
      </div>
    );
  }
}

export default App;