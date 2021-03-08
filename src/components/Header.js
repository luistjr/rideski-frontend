import { Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import '../Header.css';

function Header({ itineraries, setItineraries, user, setUser, showHome, setShowHome, currentItinerary, setCurrentItinerary }) {

  function newUser() {
    if (user === null) {
      return <div id="loginbtn"> 
      <div class="ui left attached button"><Link className="new-button" to="/login">Login</Link></div> 
      <div class="right attached ui button"><Link className="new-button" to="/signup">Signup</Link></div>
        </div>
    }
  }

  return (
    <div>
      <div id="header-image"><img src="http://[::1]:3001/images/rideski_header_img.jpg" alt="rideski. banner" /></div>
      {user ? <Navbar user={user} setUser={setUser} setShowHome={setShowHome} currentItinerary={currentItinerary} setCurrentItinerary={setCurrentItinerary} itineraries={itineraries} setItineraries={setItineraries}/> : null }
      <br />
      <nav>
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