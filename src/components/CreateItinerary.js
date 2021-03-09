import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../CreateItinerary.css';
import AddRide from './AddRide';

function CreateItinerary({ user, setShowHome, itineraries, setItineraries }) {

  // const toggleHome = setShowHome(false)
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
      <br />
      <br />
      <div className="create">
        {/* {toggleHome} */}
        <button onClick={handleAddRides} className="ui button" >Add Rides to Existing Itinerary</button>
        </div>
        <br />
        <br />
        <div className="create">
        {addRides ? <AddRide user={user} /> : <button onClick={handleDateClick} className="ui button">Create New Itinerary </button>}
        </div>
        < br />
        < br />
        {showCalendar ? <form onSubmit={handleSubmit}>
          <Calendar onChange={setDate} value={date} />
          <br />
          <input type="submit" />
        </form> : null}
    </div>

  );
}

export default CreateItinerary;