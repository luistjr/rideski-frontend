import { useState, useEffect } from 'react';
import ItineraryList from './ItineraryList';

function ItineraryContainer( {user} ) {

  const [ itineraries, setItineraries ] = useState([]);
  const { id } = user;


  useEffect(() => {
    fetch(`http://[::1]:3001/users/${id}`)
    .then(r => r.json())
    .then(data => {
      return setItineraries(data.itineraries)});
  }, [id]);
  
  return (
    <div>
      <ItineraryList itineraries={itineraries} user={user} setItineraries={setItineraries} />
    </div>
  );
}

export default ItineraryContainer;