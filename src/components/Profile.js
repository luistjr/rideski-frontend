import '../Profile.css';
import UpdateProfile from './UpdateProfile';

function Profile({user , setUser, setShowHome}) {

  const toggleHome = setShowHome(false)
  const { first_name, email, img, username, } = user 
  
  return (
    <div className="profile-div">
      {toggleHome}
      <br />
      <h1>{first_name}'s Profile</h1>
      <img src={img} alt={first_name} className="ui avatar image" />
      <h4>Email: {email}</h4>
      <h4>Username: {username}</h4>
      <button className="ui button">Update Account</button>
      <button className="ui basic button">Logout</button>
      <UpdateProfile user={user} setUser={setUser}/>
    </div>

  );
}

export default Profile;