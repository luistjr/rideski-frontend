import CreateItinerary from './CreateItinerary';

function Home( {user} ) {

  const { firstName, img } = user 

  console.log({user})

  return (
    <div>
      <p>Welcome Home {firstName}!</p>

      <img src='http://[::1]:3001/images/castle_animation.gif' alt="Disney Castle Animation" className="anim-home"/>
      <CreateItinerary />

    </div>

  );
}

export default Home;