import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h2>Let's get this party started</h2> */}
        <Header />
      </div>
    );
  }
}

export default App;