import React from 'react';
import ItineraryItem from './ItineraryItem';

function ItineraryList({ currentItinerary, setCurrentItinerary, itineraries, user, setItineraries }) {

  const itineraryItem = itineraries.map((itinerary) => {
    console.log('it list', itinerary)
    return <ItineraryItem itinerary={itinerary} key={itinerary.id} user={user} itineraries={itineraries} setItineraries={setItineraries} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} />
  })

  console.log("I LIST", itineraryItem)
  
  return (
    <div>
      <br />
      {itineraryItem}
    </div>

  );
}

export default ItineraryList;