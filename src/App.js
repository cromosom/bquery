import React, { Component } from 'react';
import { fetchData } from './actions/receiver';
import { sortData } from './actions/sort';
import { filterData } from './actions/filter';
import { setPage } from './actions/paginate';
import { connect } from 'react-redux';
import BowerList from './components/list';
import Pagination from './components/pagination';
import { chunkData } from './logic/dataOperations';

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

    let spinner = document.getElementById('spinner');
    let query = document.getElementById('queryField').value;

    spinner.classList.add('is--active');
    fetchData(query);
  }

  // handles data sorting
  sortBy (sortParam, data) {
    sortData(data, sortParam);
  }

  // handles filtering
  searchPackage (event, data) {
    setPage(0);

    let query = document.getElementById('queryField').value;
    filterData(query, data);
  }

  componentDidMount () {
    document.getElementById('queryField').focus();
  }

  render() {

    const { data, pageIndex, originalData } = this.props;

    let chunkedData = chunkData(data);

    return (
      <div className="main-container">

        <header>
          <div className="header-content">
            <h1>BQuery</h1>

            <form className="form" onSubmit={ev => this.getData(ev)}>
              <input type="text" className="search-field" onInput={ev => this.searchPackage(ev, originalData)} id="queryField" placeholder="Search Name..." />
              <button className="btn" type="submit">Request Packages</button>
            </form>
          </div>
        </header>

        {chunkedData[pageIndex] &&
          <div className="content">
            <BowerList data={data} items={chunkedData} pageIndex={pageIndex} sortBy={this.sortBy} />
            <Pagination items={chunkedData} pageIndex={pageIndex} />
          </div>
        }

        <div className="spinner" id="spinner">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>
    );
  }
}

export default connect(storeProps)(App);
