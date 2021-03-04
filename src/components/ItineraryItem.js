import { useState } from 'react';
import SelectedItinerary from './SelectedItinerary';

function ItineraryItem({ currentItinerary, setCurrentItinerary, itinerary, itineraries, setItineraries, user }) {

  const { first_name } = user;
  const { id, date } = itinerary;

  function handleDateClick(e) {

    fetch(`http://[::1]:3001/itineraries/${e.target.id}`)
      .then(r => r.json())
      .then(itineraryInfo => setCurrentItinerary(itineraryInfo));
  }

  console.log('IT', currentItinerary);

  function selectedItem(){
    if (currentItinerary !== ""){
      return <SelectedItinerary currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} itineraries={itineraries} setItineraries={setItineraries} user={user}/>
    }
  }

  return (
    <div>
      <h1 onClick={handleDateClick} id={id}>{date}</h1> 
      {selectedItem()}
    </div>
  );
}

export default ItineraryItem;