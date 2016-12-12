import React, { Component } from 'react';
import { setPage } from '../actions/paginate';

class Pagination extends Component {

  passIndex (index) {
    setPage(index);
  }

  render () {
    const { items, pageIndex } = this.props;

    return (
      <div className="pagination">
        {items.map( (chunk, index) => (
          <span className={pageIndex === index ? 'is--active' : ''} onClick={() => this.passIndex(index)} key={index} >{index + 1}</span>
        ))}
      </div>
    )
  }

}

export default Pagination;
