import React, { Component } from 'react';
import { fetchData } from './actions/receiver';
import { sortData } from './actions/sort';
import { connect } from 'react-redux';
import BowerList from './components/list';
import Pagination from './components/pagination';
import { chunkData } from './logic/dataOperations';

// passes store data
function storeProps(state) {
  return {
    data : state.data,
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

  sortBy (sortParam, data) {
    // console.log(data);
    sortData(data, sortParam);
  }

  render() {

    const { data, pageIndex } = this.props;

    let chunkedData = chunkData(data);

    return (
      <div className="App">
        <form onSubmit={this.getData.bind(this)}>
          <input id="queryField" />
          <button type="submit">Get</button>
        </form>

        {chunkedData[pageIndex] &&
          <div>
            <BowerList data={data} items={chunkedData} pageIndex={pageIndex} sortBy={this.sortBy} />
            <Pagination items={chunkedData} />
          </div>
        }
      </div>
    );
  }
}

export default connect(storeProps)(App);
