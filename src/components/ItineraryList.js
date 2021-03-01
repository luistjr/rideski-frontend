import React from 'react';
import ItineraryItem from './ItineraryItem';

function ItineraryList({ itineraries, user }) {



  const itineraryItem = itineraries.map((itinerary) => {
    return <ItineraryItem itinerary={itinerary} key={itinerary.id} user={user} />
  })
  
  return (
    <div>
      <br />
      {itineraryItem}
    </div>

  );
}

export default ItineraryList;