import React from 'react';
import ListItem from './listItem';

const List = ({items}) => (
  <div>
    <ul>
    {console.log(items)}
      {items.map((item, index) => (
        <ListItem key={index} data={item} ></ListItem>
      ))}
    </ul>

  </div>
);

export default List;
