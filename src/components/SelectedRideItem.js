import React from 'react';
import '../RideItem.css';
import ItineraryContainer from './ItineraryContainer';

function SelectedRideItem({ currentItinerary, setCurrentItinerary, ride, itineraries, setItineraries, user }) {
    const {id, name, img, land, description, ride_itineraries } = ride;

    console.log("ride itineraries", ride_itineraries);

    const rideTime = ride_itineraries.map((rI) => rI.time)[0]

    const rideItineraryId = ride_itineraries.map((rI) => rI.id)[0]

    
    function deleteItineraries(dataId) {

        let matchItineraryRides = currentItinerary.rides.filter(ride => ride.id !== id)
        let newItineraryObj = {date: currentItinerary.date, rides: matchItineraryRides}

        setCurrentItinerary(newItineraryObj)
    }

    function handleDeleteEvent(e) {

        // setItineraries([]);

        fetch(`http://[::1]:3001/ride_itineraries/${e.target.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then((data) => deleteItineraries(data.id))
    }

    function handleEditButton() {
        console.log('edit')
    }

    // const checkFunction = function convertTime() {
    //     if (parseInt(rideTime[0]) <= 12) {
    //         return parseInt(rideTime[0]) + " AM"
    //     } else {
    //         return (parseInt(rideTime[0]) - 12) + " PM"
    //     }
    // }

    // how to get the state updated

    return (
        <div>
            <h3>{rideTime}</h3>
            <h1 className="ride-name">{name}</h1>
            <img src={img} alt={name} className="ride-img" />
            <h4>{land}</h4>
            <p>{description}</p>
            <button onClick={handleEditButton} id={rideItineraryId}>Edit Time</button>
            <button onClick={handleDeleteEvent} id={rideItineraryId}>Remove Me</button>
            <hr />
        </div>
    );
}

export default SelectedRideItem;