import React from 'react';

function Home({ user, showHome }) {

  const { first_name } = user

  return (
    <div>
      {showHome ? <div>
        <p>Welcome Home {first_name}!</p>
        <img src='http://[::1]:3001/images/castle_animation.gif' alt="Disney Castle Animation" className="anim-home" />
        <br />
        </div> : null}
    </div>

  );
}

export default Home;