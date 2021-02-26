import React from 'react';
import ItineraryItem from './ItineraryItem';

function ItineraryList( {itineraries} ) {

  const itineraryItem = itineraries.map(itinerary => {
    <ItineraryItem itinerary={itinerary} />
  })
  
  return (
    <div>
      <p>Itinerary List</p>
      {itineraryItem}
    </div>

  );
}

export default ItineraryList;