import React from 'react';
import '../RideItem.css';

function SelectedRideItem({ currentItinerary, ride }) {

    const { name, img, land, description, ride_itineraries } = ride

    const rideTime = ride_itineraries.map((rI) => rI.time )

    const rideItineraryId = ride_itineraries.map((rI) => rI.id)

    function handleDeleteEvent(e) {
        
        fetch(`http://[::1]:3001/ride_itineraries/${e.target.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then((data) => console.log(data))
    }

    return (
        <div>
            <h3>{rideTime}</h3>
            <h1 className="ride-name">{name}</h1>
            <img src={img} alt={name} className="ride-img" />
            <h4>{land}</h4>
            <p>{description}</p>
            <button onClick={handleDeleteEvent} id={rideItineraryId}>Remove Me</button>
            <hr />
        </div>
    );
}

export default SelectedRideItem;