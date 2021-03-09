import React from 'react';
import ItineraryItem from './ItineraryItem';

function ItineraryList({ itineraries, user, setItineraries }) {

  const itineraryItem = itineraries.map((itinerary) => {
    return <ItineraryItem itinerary={itinerary} key={itinerary.id} user={user} itineraries={itineraries} setItineraries={setItineraries} />
  })
  
  return (
    <div className="ui list">
      <br />
      <br />
      <img className="ui image" src="https://media1.giphy.com/media/11vVUnbjUONl3q/giphy.gif?cid=ecf05e476xsawgx6tf0kep4vjxg3ljb60vdgall5iqkkqgbo&rid=giphy.gif" />
      <div className="item">{itineraryItem}</div>
    </div>

  );
}

export default ItineraryList;