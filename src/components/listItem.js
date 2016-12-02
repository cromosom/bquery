import React from 'react';

const List = ({data}) => (
  <li>{data.name}, {data.author}, {data.stars}</li>
);

export default List;
