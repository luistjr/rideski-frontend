import { useState, useEffect } from 'react';
import ItineraryList from './ItineraryList';

function ItineraryContainer( { itineraries, setItineraries, currentItinerary, setCurrentItinerary, user, setShowHome} ) {

  const toggleHome = setShowHome(false)
  
  const { id } = user;

  // console.log('itinerary container', itineraries)

  useEffect(() => {
    fetch(`http://[::1]:3001/users/${id}`)
    .then(r => r.json())
    .then(data => {
      return setItineraries(data.itineraries)});
  }, [id]);
  
  return (
    <div>
      {toggleHome}
      <ItineraryList itineraries={itineraries} user={user} setItineraries={setItineraries} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary}/>
    </div>
  );
}

export default ItineraryContainer;