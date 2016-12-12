import React, { Component } from 'react';
import { fetchData } from './actions/receiver';
import { sortData } from './actions/sort';
import { filterData } from './actions/filter';
import { connect } from 'react-redux';
import BowerList from './components/list';
import Pagination from './components/pagination';
import { chunkData } from './logic/dataOperations';

import './index.css';

// passes store data
function storeProps(state) {
  return {
    originalData : state.fetchedData,
    data : state.renderData,
    pageIndex: state.pageIndex
  };
}

class App extends Component {

  // handles api request
  getData(event) {
    event.preventDefault();

    let query = document.getElementById('queryField').value;
    fetchData(query);
  }

  // handles data sorting
  sortBy (sortParam, data) {
    sortData(data, sortParam);
  }

  // handles filtering
  searchPackage (event, data) {
    event.preventDefault();

    let query = document.getElementById('queryField').value;
    filterData(query, data);
  }

  render() {

    const { data, pageIndex, originalData } = this.props;

    let chunkedData = chunkData(data);

    return (
      <div className="App">
        <header>
          <button onClick={(ev) => this.getData(ev)}>Request Packages</button>

          <form onSubmit={(ev) => this.searchPackage(ev, originalData)}>
            <input id="queryField" />
            <button type="submit">Search</button>
          </form>
        </header>

        {chunkedData[pageIndex] &&
          <div className="content">
            <BowerList data={data} items={chunkedData} pageIndex={pageIndex} sortBy={this.sortBy} />
            <Pagination items={chunkedData} />
          </div>
        }
      </div>
    );
  }
}

export default connect(storeProps)(App);
