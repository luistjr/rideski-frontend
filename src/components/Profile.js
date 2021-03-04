import '../Profile.css';
import UpdateProfile from './UpdateProfile';

function Profile({user , setUser, setShowHome}) {

  const toggleHome = setShowHome(false)
  const { id, first_name, email, img, username, } = user 

  console.log('profile', {user})
  console.log('profile id', id)
  
  return (
    <div className="profile-div">
      {toggleHome}
      <br />
      <p>{first_name}'s Profile</p>
      <img src={img} alt={first_name} className="profile-img" />
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <UpdateProfile user={user} setUser={setUser}/>
    </div>

  );
}

export default Profile;