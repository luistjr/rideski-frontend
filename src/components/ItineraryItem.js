import React from 'react';

function ItineraryItem({itinerary}) {

  const { date } = itinerary;
  
  return (
    <div>
      <p>{date}</p>
    </div>

  );
}

export default ItineraryItem;