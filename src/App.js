import React, { Component } from 'react';
import BowerList from './components/list';
import './App.css';

class App extends Component {
  render() {

    let dummy = [
      1, 2, 3
    ]

    return (
      <div className="App">
        <BowerList items={dummy} />
        <button>Get</button>
      </div>
    );
  }
}

export default App;
