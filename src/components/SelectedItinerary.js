import React from 'react';
import SelectedRideItem from './SelectedRideItem';
import '../SelectedItinerary.css';

function SelectedItinerary({ currentItinerary, setCurrentItinerary }) {

    const { date, rides } = currentItinerary;

    const importedRide = rides.map((ride) => {
        return <SelectedRideItem ride={ride} key={ride.id} currentItinerary={currentItinerary} />
    })

    return (
        <div>
            <h2>{date}</h2>
            {importedRide}
        </div>
    )
}

export default SelectedItinerary;
