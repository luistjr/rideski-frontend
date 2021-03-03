import '../Profile.css';
import UpdateProfile from './UpdateProfile';

function Profile({user , setUser, setShowHome}) {

  const toggleHome = setShowHome(false)
  const { firstName, email, img, username, } = user 

  
  console.log({user});
  return (
    <div className="profile-div">
      {toggleHome}
      <br />
      <p>{firstName}'s Profile</p>
      <img src={img} alt={firstName} className="profile-img" />
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <UpdateProfile user={user} setUser={setUser}/>
    </div>

  );
}

export default Profile;