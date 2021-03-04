import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import AddRide from './AddRide';

function CreateItinerary({ user, setShowHome, currentItinerary, setCurrentItinerary, itineraries, setItineraries }) {

  // console.log(' create itinerary', itineraries)

  const toggleHome = setShowHome(false)
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [addRides, setAddRides] = useState(false);

  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const newDate = `${month}/${day}/${year}`

  const itineraryDate = {
    date: newDate
  };

  function handleSubmit(e) {
    e.preventDefault();
    setShowCalendar(false);

    fetch('http://[::1]:3001/itineraries/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itineraryDate),
    })
      .then(response => response.json())
      .then((data) => createUserItinerary(data.id));
  }

  function createUserItinerary(id) {

    fetch('http://[::1]:3001/user_itineraries/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id,
        itinerary_id: id
      }),
    })
      .then(response => response.json())
      .then(data => setItineraries([...itineraries, data]));
  }


  function handleDateClick() {
    setShowCalendar(true)
  }

  function handleAddRides() {
    setAddRides(true);
  }

  return (
    <div>
      {toggleHome}
      <br />
      <br />
      <button onClick={handleAddRides}>Add Rides to Existing Itinerary</button>
      <br />
      <br />
      {addRides ? <AddRide user={user} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} /> : <button onClick={handleDateClick}>Create New Itinerary </button>}
      {showCalendar ? <form onSubmit={handleSubmit}>
        <Calendar onChange={setDate} value={date} />
        <br />
        <input type="submit" />
      </form> : null}
    </div>

  );
}

export default CreateItinerary;