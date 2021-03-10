import React from 'react';
import '../Home.css';

function Home({ user, showHome }) {

  const { first_name } = user

  return (
    <div>
      {showHome ? <div className="display-home">
        <h3>Welcome Home {first_name}!</h3>
        <img src='http://[::1]:3001/images/castle_home_animation.gif' alt="Disney Castle Animation" className="ui medium rounded image" />
        <br />
        <br />
        </div> : null}
    </div>

  );
}

export default Home;