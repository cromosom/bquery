import React from 'react';

const List = ({data}) => (
  <li className="package-list__item">
    <div>{data.name}</div>
    <div>{data.author}</div>
    <div>{data.stars}</div>
  </li>
);

export default List;
