import { useState } from 'react';
import "../Navbar.css"
import { Switch, Route, Link } from "react-router-dom";
import CreateItinerary from './CreateItinerary';
import ItineraryContainer from './ItineraryContainer';
import Profile from './Profile';
import RideContainer from './RideContainer';

function Navbar({ user, setUser, setShowHome }) {

  // console.log("nav", {showHome})

  return (
    <div>
      <nav className="nav-bar">
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
      </nav>

      <Switch>
        <Route exact path="/trips/create">
          <CreateItinerary user={user} setShowHome={setShowHome} />
        </Route>
        <Route exact path="/trips">
          <ItineraryContainer user={user} setUser={setUser} setShowHome={setShowHome} />
        </Route>
        <Route exact path="/rides">
          <RideContainer setShowHome={setShowHome}/>
        </Route>
        <Route exact path="/profile">
          <Profile user={user} setUser={setUser} setShowHome={setShowHome}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Navbar;