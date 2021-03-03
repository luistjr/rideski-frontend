import { useState } from 'react';
import CreateItinerary from './CreateItinerary';
import { useHistory } from 'react-router-dom';

function Home({ user, showHome, setShowHome }) {

  const { firstName, img } = user

  console.log("show home", {showHome})

  let history = useHistory();

  function handleCreateClick() {
    history.push("/trips/create")
    setShowHome(false)
  }

  function show() {
    if (showHome === true) {
      return <div>
        <p>Welcome Home {firstName}!</p>
        <img src='http://[::1]:3001/images/castle_animation.gif' alt="Disney Castle Animation" className="anim-home" />
        <br />
        <button onClick={handleCreateClick}>Create Itinerary</button>
      </div>
    } else {
      return console.log('nope')
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