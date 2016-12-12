import React from 'react';
import ListItem from './listItem';

const List = ({ data, items, pageIndex, sortBy }) => (
  <div>
    <ul className="package-list">
      <li className="list-header">
        <div onClick={() => sortBy('name', data)}>Project,</div>
        <div onClick={() => sortBy('author', data)}>Owner,</div>
        <div onClick={() => sortBy('stars', data)}>Stars</div>
      </li>
      {items[pageIndex].map((item, index) => (
        <ListItem key={index} data={item} ></ListItem>
      ))}
    </ul>

  </div>
);

export default List;
