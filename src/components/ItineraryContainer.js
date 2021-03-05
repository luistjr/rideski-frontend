import { useEffect, useState } from 'react';
import ItineraryList from './ItineraryList';

function ItineraryContainer({ itineraries, setItineraries, user, setShowHome }) {

  const [currentItinerary, setCurrentItinerary] = useState("");

  console.log("container", {itineraries})
  
  // const toggleHome = setShowHome(false)

  const { id } = user;

  console.log('itinerary container', itineraries)

  useEffect(() => {
    fetch(`http://[::1]:3001/users/${id}`)
      .then(r => r.json())
      .then(data => setItineraries(data.itineraries));
  }, [id, setItineraries]);

  return (
    <div>
      {/* {toggleHome} */}
      <ItineraryList itineraries={itineraries} user={user} setItineraries={setItineraries} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} />
    </div>
  );
}

export default ItineraryContainer;