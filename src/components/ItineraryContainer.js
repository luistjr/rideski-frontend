import { useEffect } from 'react';
import ItineraryList from './ItineraryList';

function ItineraryContainer({ itineraries, setItineraries, user }) {

  const { id } = user;

  useEffect(() => {
    fetch(`http://[::1]:3001/users/${id}`)
      .then(r => r.json())
      .then(data => setItineraries(data.itineraries));
  }, [id, setItineraries]);

  return (
    <div>
      <ItineraryList itineraries={itineraries} user={user} setItineraries={setItineraries} />
    </div>
  );
}

export default ItineraryContainer;