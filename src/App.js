import React, { Component } from 'react';
import BowerList from './components/list';
import {fetchData} from './actions/receiver';
import './App.css';

class App extends Component {

  get() {
    fetchData();
  }

  render() {

    let dummy = [
      1, 2, 3
    ]

    return (
      <div className="App">
        <BowerList items={dummy} />
        <button onClick={this.get.bind(this)}>Get</button>
      </div>
    );
  }
}

export default App;
