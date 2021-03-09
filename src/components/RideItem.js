import React, { useState } from 'react';
import '../RideItem.css';
import Carousel from 'react-elastic-carousel'

function RideItem({ ride }) {

  const { name, img, land, description } = ride

  return (
    <div>
      <br />
      <img src={img} alt={name} className="ride-img" />
      <div className="ride-profile">
        <h1 className="ride-name">{name}</h1>
        <p>{land}</p>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default RideItem;