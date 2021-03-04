import React from 'react';
import ItineraryItem from './ItineraryItem';

function ItineraryList({ currentItinerary, setCurrentItinerary, itineraries, user, setItineraries }) {

  console.log("itinerary list", itineraries)

  const itineraryItem = itineraries.map((itinerary) => {
    return <ItineraryItem itinerary={itinerary} key={itinerary.id} user={user} itineraries={itineraries} setItineraries={setItineraries} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary}/>
  })
  
  return (
    <div>
      <br />
      {itineraryItem}
    </div>

  );
}

export default ItineraryList;