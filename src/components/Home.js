import React from 'react';
// import CreateItinerary from './CreateItinerary';
import { useHistory } from 'react-router-dom';

function Home({ user, showHome, setShowHome, currentItinerary, setCurrentItinerary }) {

  const { first_name, img } = user

  let history = useHistory();

  function handleCreateClick() {
    history.push("/trips/create")
    setShowHome(false)
  }

  function show() {
    if (showHome === true) {
      return <div>
        <p>Welcome Home {first_name}!</p>
        <img src='http://[::1]:3001/images/castle_animation.gif' alt="Disney Castle Animation" className="anim-home" />
        <br />
        <button onClick={handleCreateClick}>Create Itinerary</button>
      </div>
    }
  }

  // do I need this function and button on line 21?

  return (
    <div>
      {show()}

    </div>

  );
}

export default Home;