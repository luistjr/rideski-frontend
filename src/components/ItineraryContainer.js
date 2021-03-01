import { useState, useEffect } from 'react';
import ItineraryList from './ItineraryList';

function ItineraryContainer( {user} ) {

  const [ itineraries, setItineraries ] = useState([]);


  useEffect(() => {fetch(`http://[::1]:3001/users/${user.id}`)
    .then(r => r.json())
    .then(data => setItineraries(data.itineraries))
  }, []);
  
  return (
    <div>
      <ItineraryList itineraries={itineraries} user={user} />
    </div>
  );
}

export default ItineraryContainer;