import React from 'react';
import "../Navbar.css"
import { Switch, Route, Link } from "react-router-dom";
import CreateItinerary from './CreateItinerary';
import ItineraryContainer from './ItineraryContainer';
import Profile from './Profile';
import RideContainer from './RideContainer';

function Navbar() {

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
          <CreateItinerary />
        </Route>
        <Route exact path="/trips">
          <ItineraryContainer />
        </Route>
        <Route exact path="/rides">
          <RideContainer />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>

    </div>

  );
}

export default Navbar;