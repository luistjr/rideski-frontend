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

  function deleteItinerary(dataId) {

    let matchItinerary = itineraries.filter(itinerary => itinerary.id !== id)

    setItineraries(matchItinerary)
  }

  function handleRemoveItinerary(e) {

    fetch(`http://[::1]:3001/itineraries/${e.target.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => deleteItinerary(data.id))
  };

  return (
    <div>
      <p onClick={handleDateClick} id={id} className="itinerary-date">{date}</p>
      <button onClick={handleRemoveItinerary} id={id}>Remove Itinerary</button>
      {selectedItem()}
    </div>
  );
}

export default ItineraryItem;