import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

function Header() {

  return (
    <div>
      <p>Header</p>
      <Navbar />
      <br />
      <nav className="register-nav">
        <Link className="button" to="/login">
          Login
        </Link>
        <Link className="button" to="/signup">
          Signup
        </Link>
      </nav>

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>

    </div>
  );
}

export default Header;