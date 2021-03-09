import React from 'react';
import ItineraryItem from './ItineraryItem';

function ItineraryList({ itineraries, user, setItineraries }) {

  const itineraryItem = itineraries.map((itinerary) => {
    return <ItineraryItem itinerary={itinerary} key={itinerary.id} user={user} itineraries={itineraries} setItineraries={setItineraries} />
  })
  
  return (
    <div className="ui list">
      <br />
      <br />
      <div className="item">{itineraryItem}</div>
    </div>

  );
}

export default ItineraryList;