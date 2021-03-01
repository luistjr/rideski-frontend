import React from 'react';
import '../RideItem.css';

function RideItem( {ride} ) {

  const { name, img, land, description } = ride

  return (
    <div>
      <h1 className="ride-name">{name}</h1>
      <img src={img} alt={name} className="ride-img" />
      <p>{land}</p>
      <p>{description}</p>
      <hr />
    </div>
  );
}

export default RideItem;