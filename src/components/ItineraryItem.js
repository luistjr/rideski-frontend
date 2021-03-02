import { useState } from 'react';
import SelectedItinerary from './SelectedItinerary';

function ItineraryItem({ itinerary, itineraries, setItineraries, user }) {

  const { firstName } = user;
  const { id, date } = itinerary;

  const [currentItinerary, setCurrentItinerary] = useState("");

console.log("It Item", itineraries)

  function handleDateClick(e) {
    fetch(`http://[::1]:3001/itineraries/${e.target.id}`)
      .then(r => r.json())
      .then(itineraryInfo => setCurrentItinerary(itineraryInfo));
  }

  function selectedItem(){
    if (currentItinerary !== ""){
      return <SelectedItinerary currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} itineraries={itineraries} setItineraries={setItineraries} user={user}/>
    } 
  }

  return (
    <div>
      <p>{firstName}'s Trips</p>
      <p onClick={handleDateClick} id={id}>{date}</p> 
      {selectedItem()}
    </div>
  );
}

export default ItineraryItem;