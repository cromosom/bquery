import React from 'react';
import ListItem from './listItem';

const List = ({items}) => (
  <ul>
    {items.map((item) => (
      <ListItem key={item} val={item} ></ListItem>
    ))}
  </ul>
);

export default List;
