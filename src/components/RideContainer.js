import { useState, useEffect } from 'react';
import RideList from './RideList';

function RideContainer({setShowHome}) {

  const [rides, setRides] = useState([]);

  const toggleHome = setShowHome(false)

  useEffect(() => {fetch('http://[::1]:3001/rides')
    .then(response => response.json())
    .then(data => setRides(data));}, [])

  return (
    <div>
      {toggleHome}
      <RideList rides={rides}/>
    </div>

  );
}

export default RideContainer;