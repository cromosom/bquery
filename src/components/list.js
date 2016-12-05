import React from 'react';
import ListItem from './listItem';

const List = ({ items, pageIndex }) => (
  <div>
    <ul>
      {items[pageIndex].map((item, index) => (
        <ListItem key={index} data={item} ></ListItem>
      ))}
    </ul>

  </div>
);

export default List;
