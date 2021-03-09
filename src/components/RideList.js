import React from 'react';
import RideItem from './RideItem';
import Carousel from 'react-elastic-carousel'



function RideList({ rides }) {

  // let rideList = rides.map(ride => {
  //   return <RideItem ride={ride} key={ride.id} />
  // })

  return (
    <div>
      <Carousel itemsToShow={5} enableAutoPlay autoPlaySpeed={3000}>
        <img src="http://[::1]:3001/images/default_profilepic.jpg" alt="Mickey Mouse" />
      
        {rides.map(ride => {
          return <RideItem ride={ride} key={ride.id} />
        })}
      </Carousel>
    </div>
  );
}

export default RideList;