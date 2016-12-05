import React from 'react';
import ListItem from './listItem';

const List = ({ items, pageIndex, sortBy }) => (
  <div>
    <ul>
      <li>
        <div onClick={() => sortBy(1)}>Project,</div>
        <div onClick={() => sortBy(2)}>Owner,</div>
        <div onClick={() => sortBy(3)}>Stars</div>
      </li>
      {items[pageIndex].map((item, index) => (
        <ListItem key={index} data={item} ></ListItem>
      ))}
    </ul>

  </div>
);

export default List;
