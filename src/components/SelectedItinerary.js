import React from 'react';
import SelectedRideItem from './SelectedRideItem';
import styled from "styled-components";

function SelectedItinerary({ currentItinerary, setCurrentItinerary, itineraries, setItineraries, user }) {

    const { rides } = currentItinerary;

    const importedRide = rides.map((ride) => {
        return <SelectedRideItem ride={ride} key={ride.id} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} itineraries={itineraries} setItineraries={setItineraries} user={user} />
    })

    return (
        <div>
            <Ride>
                {currentItinerary.rides ? importedRide : null}
            </Ride>
        </div>
    )
}

export default SelectedItinerary;

const Ride = styled.div`
    display: flex;
    justify-content: center;
`