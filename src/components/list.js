import React from 'react';
import ListItem from './listItem';

const List = ({ items, pageIndex }) => (
  <div>
    <ul>
      <li>
        <div>Project,</div>
        <div>Owner,</div>
        <div>Stars</div>
      </li>
      {items[pageIndex].map((item, index) => (
        <ListItem key={index} data={item} ></ListItem>
      ))}
    </ul>

  </div>
);

export default List;
