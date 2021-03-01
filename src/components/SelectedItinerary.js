import React from 'react';
import SelectedRideItem from './SelectedRideItem';

function SelectedItinerary({ currentItinerary, setCurrentItinerary }) {

    const { id, date, rides } = currentItinerary;

    const importedRide = rides.map((ride) => {
        return <SelectedRideItem ride={ride} key={ride.id} />
    })

    const allRides = rides.map((ride) => {
        return ride['ride_itineraries']
    })

    const rideItinerary = allRides.map((rideI) => {
        return rideI
    })

    // How do I get the times to display next to the item // 

    return (
        <div>
            <h2>{date}</h2>
            <p>{importedRide}</p>
        </div>
    )
}

export default SelectedItinerary;
