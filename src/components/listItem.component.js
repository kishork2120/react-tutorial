import React from 'react';

const ListItem  = ({ itemName, index })=>{
  return(
    <li key={index.toString()}>{itemName}</li>
  )
}

export default ListItem;
