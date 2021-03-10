import React from 'react';
import "../Navbar.css"
import { Switch, Route, Link } from "react-router-dom";
import CreateItinerary from './CreateItinerary';
import ItineraryContainer from './ItineraryContainer';
import Profile from './Profile';
import RideContainer from './RideContainer';
import Logout from './Logout';

function Navbar({ user, setUser, setShowHome, itineraries, setItineraries}) {

  return (
    <div>
      <nav className="ui button">
        <Link className="button" to="/trips/create">
          Create
        </Link>
        <Link className="button" to="/trips">
          My Trips
        </Link>
        <Link className="button" to="/rides">
          All Rides
        </Link>
        <Link className="button" to="/profile">
          Profile
        </Link>
        <Link className="button" to="/logout">
          Logout
        </Link>
      </nav>

      <Switch>
        <Route exact path="/trips/create">
          <CreateItinerary user={user} setShowHome={setShowHome} itineraries={itineraries} setItineraries={setItineraries} />
        </Route>
        <Route exact path="/trips">
          <ItineraryContainer user={user} setUser={setUser} setShowHome={setShowHome} itineraries={itineraries} setItineraries={setItineraries} />
        </Route>
        <Route exact path="/rides">
          <RideContainer setShowHome={setShowHome}/>
        </Route>
        <Route exact path="/profile">
          <Profile user={user} setUser={setUser} setShowHome={setShowHome}/>
        </Route>
        <Route exact path="/logout">
          <Logout setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default Navbar;