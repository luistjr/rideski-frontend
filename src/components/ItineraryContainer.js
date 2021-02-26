import { useState, useEffect } from 'react';
import ItineraryList from './ItineraryList';

function ItineraryContainer() {

  const [ itineraries, setItineraries ] = useState([]);

  useEffect(() => {fetch('http://[::1]:3001/itineraries')
    .then(r => r.json())
    .then(data => setItineraries(data))
  }, []);
  
  return (
    <div>
      <ItineraryList itineraries={itineraries} />
    </div>
  );
}

export default ItineraryContainer;