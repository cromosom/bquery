import React, { Component } from 'react';
import { setPage } from '../actions/paginate';

class Pagination extends Component {

  passIndex (index) {
    setPage(index);
  }

  render () {
    const items = this.props.items;

    return (
      <div>
        {items.map( (chunk, index) => (
          <span onClick={() => this.passIndex(index)} key={index} >{index + 1}</span>
        ))}
      </div>
    )
  }

}

export default Pagination;
