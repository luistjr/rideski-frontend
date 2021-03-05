import React from 'react';
import ItineraryItem from './ItineraryItem';

function ItineraryList({ itineraries, user, setItineraries }) {

  console.log('list', itineraries);

  const itineraryItem = itineraries.map((itinerary) => {
    console.log('it list', itinerary)
    return <ItineraryItem itinerary={itinerary} key={itinerary.id} user={user} itineraries={itineraries} setItineraries={setItineraries} />
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