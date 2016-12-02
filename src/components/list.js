import React from 'react';
import ListItem from './listItem';

const List = ({items}) => (
  <ul>
    {items.map((item, index) => (
      <ListItem key={index} data={item} ></ListItem>
    ))}
  </ul>
);

export default List;
