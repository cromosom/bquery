import React, { Component } from 'react';
import { fetchData } from './actions/receiver';
import { connect } from 'react-redux';
import BowerList from './components/list';

import './App.css';

// passes store data
function storeProps(state) {
  return {data : state.data};
}

class App extends Component {

  // handles api request
  getData(event) {
    event.preventDefault();

    let query = document.getElementById('queryField').value;
    fetchData(query);
  }

  render() {

    const data = this.props.data;

    return (
      <div className="App">
        <form onSubmit={this.getData.bind(this)}>
          <input id="queryField" />
          <button type="submit">Get</button>
        </form>

        <BowerList items={data} />
      </div>
    );
  }
}

export default connect(storeProps)(App);
