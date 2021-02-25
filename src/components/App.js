import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home'


function App() {

  const [user, setUser] = useState(null);

  console.log(user);



  return (
    <div>
      <Header user={user} setUser={setUser} />
      { user ? <Home user={user}/> : <h1>Please login or signup</h1> }
    </div>

  );
}

export default App;
