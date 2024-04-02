
import React from 'react';

const List = ({ data, handleClick }) => {

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          {item}{' '}
          <button onClick={() => handleClick(index)}>!!!</button>
        </li>
      ))}
    </ul>
  );
};

export default List;