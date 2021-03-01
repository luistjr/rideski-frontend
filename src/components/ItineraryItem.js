import { useState } from 'react';
import SelectedItinerary from './SelectedItinerary';

function ItineraryItem({ itinerary, user }) {

  const { id, date, users } = itinerary;
  const [currentItinerary, setCurrentItinerary] = useState("");

  function handleDateClick(e) {
    fetch(`http://[::1]:3001/itineraries/${e.target.id}`)
      .then(r => r.json())
      .then(itineraryInfo => setCurrentItinerary(itineraryInfo));
  }

  function selectedItem(){
    if (currentItinerary != ""){
      setCurrentItinerary = "";
      return <SelectedItinerary />
    } 
  }

  console.log(currentItinerary)

  return (
    <div>
      <p>{user.name}'s Trip</p>
      <p onClick={handleDateClick} id={id}>{date}</p> 
      {selectedItem()}
    </div>
  );
}

export default ItineraryItem;