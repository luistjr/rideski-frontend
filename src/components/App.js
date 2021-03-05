import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';


function App() {

  const [user, setUser] = useState(null);
  const [showHome, setShowHome] = useState(true);

  const [itineraries, setItineraries ] = useState([]);
  
  // array of currentItinerary is still 0 even when rides are added 

  // console.log("CI - App", currentItinerary);
  
  return (
    <div>
      <Header user={user} setUser={setUser} showHome={showHome} setShowHome={setShowHome} itineraries={itineraries} setItineraries={setItineraries} />
      { user ? <Home user={user} showHome={showHome} setShowHome={setShowHome} /> : <h1>Please login or signup</h1> }
    </div>

  );
}

export default App;
