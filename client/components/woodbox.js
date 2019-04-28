import React from 'react';

const WoodBox = props => {
  return (
    <div>
      <ul>
        <li> {props.type} </li>
        <li> {props.image} </li>
        <li> {props.description} </li>
        <li> {props.price} </li>
        <li> {props.inStock === true ? 'Available' : 'Out of Stock'} </li>
      </ul>
    </div>
  );
};

export default WoodBox;