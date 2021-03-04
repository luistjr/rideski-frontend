import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';


function App() {

  const [user, setUser] = useState(null);
  const [showHome, setShowHome] = useState(true);

  const [currentItinerary, setCurrentItinerary] = useState("");

  // array of currentItinerary is still 0 even when rides are added 
  
  return (
    <div>
      <Header user={user} setUser={setUser} showHome={showHome} setShowHome={setShowHome} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary}/>
      { user ? <Home user={user} showHome={showHome} setShowHome={setShowHome} /> : <h1>Please login or signup</h1> }
    </div>

  );
}

export default App;
