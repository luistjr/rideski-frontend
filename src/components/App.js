import React, {useState} from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';
import ItineraryContainer from './ItineraryContainer';
import RideContainer from './RideContainer';
import Profile from './Profile';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <p>App</p>
      <Header />
      <Home />
      <ItineraryContainer />
      <RideContainer />
      <Profile />
    </div>

  );
}

export default App;
