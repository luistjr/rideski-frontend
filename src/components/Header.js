import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

function Header() {

  return (
    <div>
      <p>Header</p>
      <Navbar />
      <Login />
      <Signup />
    </div>

  );
}

export default Header;