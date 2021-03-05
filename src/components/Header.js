import { Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

function Header({ itineraries, setItineraries, user, setUser, showHome, setShowHome, currentItinerary, setCurrentItinerary }) {

  function newUser() {
    if (user === null) {
      return <div> 
        <Link className="new-button" to="/login">Login</Link>
        <Link className="new-button" to="/signup">Signup</Link></div>
    }
  }

  return (
    <div>
      <h1>Header</h1>
      {user ? <Navbar user={user} setUser={setUser} setShowHome={setShowHome} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} itineraries={itineraries} setItineraries={setItineraries}/> : null }
      <br />
      <nav className="register-nav">
        {newUser()}
      </nav>

      <Switch>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/signup">
          <Signup user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default Header;