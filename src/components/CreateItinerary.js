import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function CreateItinerary({ user, setShowHome }) {

  const toggleHome = setShowHome(false)
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [rI, setRI] = useState(null);

  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const newDate = `${month}/${day}/${year}`

  const itineraryDate = {
    date: newDate
  };

  console.log("newDate", itineraryDate)

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
      .then(data => console.log("UI", data));
  }


function handleDateClick() {
  setShowCalendar(true)
}

return (
  <div>
    {toggleHome}
    <br />
    <button onClick={handleDateClick}>Select Date</button>
    <br />
    <br />
    {showCalendar ? <form onSubmit={handleSubmit}>
      <Calendar onChange={setDate} value={date} />
      <br />
      <input type="submit" />
    </form> : null}
  </div>

);
}

export default CreateItinerary;