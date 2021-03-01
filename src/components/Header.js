import { Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

function Header({ user, setUser }) {

  function newUser() {
    if (user === null) {
      return <div> 
        <Link className="new-button" to="/login">Login</Link>
        <Link className="new-button" to="/signup">Signup</Link></div>
    }
  }

  return (
    <div>
      <p>Header</p>
      {user ? <Navbar user={user} setUser={setUser}/> : null }
      <br />
      <nav className="register-nav">
        {newUser()}
      </nav>

      <Switch>
        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/signup">
          <Signup user={user} setUser={setUser} />
        </Route>
      </Switch>

    </div>
  );
}

export default Header;