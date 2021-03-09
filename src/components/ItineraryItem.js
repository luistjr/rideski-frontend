import React, { useState } from 'react';
import SelectedItinerary from './SelectedItinerary';

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

  return (
    <div>
      <h2 class="ui header">
        <img class="ui image" src="http://[::1]:3001/images/mickey_icon.png" />
        <div class="content">
          <p onClick={handleDateClick} id={id}>{date}</p>
          {selectedItem()}
        </div>
      </h2>

    </div>
  );
}

export default ItineraryItem;