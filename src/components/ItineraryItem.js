import React, { useState } from 'react';
import SelectedItinerary from './SelectedItinerary';
import '../ItineraryItem.css';

function ItineraryItem({ itinerary, itineraries, setItineraries, user }) {

  const [currentItinerary, setCurrentItinerary] = useState("");

  const { id, date } = itinerary;

  function handleDateClick(e) {

    fetch(`http://[::1]:3001/itineraries/${e.target.id}`)
      .then(r => r.json())
      .then(itineraryInfo => setCurrentItinerary(itineraryInfo));
  }

  function selectedItem() {
    if (currentItinerary !== "") {
      return <SelectedItinerary currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} itineraries={itineraries} setItineraries={setItineraries} user={user} />
    }
  }

  function handleRemoveItinerary(){
    console.log('success')
  }

  return (
    <div>
          <p onClick={handleDateClick} id={id} className="itinerary-date">{date}</p>
          {/* <button onClick={handleRemoveItinerary} id={id}>Remove Itinerary</button> */}
          {selectedItem()}
    </div>
  );
}

export default ItineraryItem;