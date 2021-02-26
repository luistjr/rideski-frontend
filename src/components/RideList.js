import React from 'react';
import RideItem from './RideItem';

function RideList( {rides} ) {

  const rideList = rides.map(ride => {
    return <RideItem ride={ride} key={ride.id} />
  })
  
  return (
    <div>
      {rideList}
    </div>

  );
}

export default RideList;