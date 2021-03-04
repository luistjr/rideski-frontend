import React from 'react';
import SelectedRideItem from './SelectedRideItem';
import '../SelectedItinerary.css';

function SelectedItinerary({ currentItinerary, setCurrentItinerary, itineraries, setItineraries, user }) {

    const { rides } = currentItinerary;

    const importedRide = rides.map((ride) => {
        return <SelectedRideItem ride={ride} key={ride.id} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} itineraries={itineraries} setItineraries={setItineraries} user={user} />
    })

return (
    <div>
        {currentItinerary.rides ? importedRide : null}
    </div>
)
}

export default SelectedItinerary;
