import { useState, useEffect } from 'react';
import RideList from './RideList';

function RideContainer() {

  const [rides, setRides] = useState([]);

  useEffect(() => {fetch('http://[::1]:3001/rides')
    .then(response => response.json())
    .then(data => setRides(data));}, [])

  return (
    <div>
      <RideList rides={rides}/>
    </div>

  );
}

export default RideContainer;