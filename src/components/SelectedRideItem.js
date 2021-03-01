import { useState } from 'react';
import '../RideItem.css';

function SelectedRideItem({ ride }) {

    const { name, img, land, description } = ride

    function handleDeleteEvent() {
        console.log('success');
    }

    return (
        <div>
            <h1 className="ride-name">{name}</h1>
            <img src={img} alt={name} className="ride-img" />
            <p>{land}</p>
            <p>{description}</p>
            <button onClick={handleDeleteEvent}>Remove Me</button>
            <hr />
        </div>
    );
}

export default SelectedRideItem;