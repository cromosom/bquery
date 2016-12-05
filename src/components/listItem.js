import React from 'react';

const List = ({data}) => (
  <li>
    <div>{data.name},</div>
    <div>{data.author},</div>
    <div>{data.stars}</div>
  </li>
);

export default List;
