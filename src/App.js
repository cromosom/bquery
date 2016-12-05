import React, { Component } from 'react';
import { fetchData } from './actions/receiver';
import { connect } from 'react-redux';
import BowerList from './components/list';
import Pagination from './components/pagination';

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

  render() {

    const { data, pageIndex } = this.props;
    console.log(data, pageIndex);
    return (
      <div className="App">
        <form onSubmit={this.getData.bind(this)}>
          <input id="queryField" />
          <button type="submit">Get</button>
        </form>

        {data[pageIndex] &&
          <div>
            <BowerList items={data} pageIndex={pageIndex} />
            <Pagination items={data} />
          </div>
        }
      </div>
    );
  }
}

export default connect(storeProps)(App);
