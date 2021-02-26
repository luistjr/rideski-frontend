import '../Profile.css';
import UpdateProfile from './UpdateProfile';

function Profile({user , setUser}) {

  const { firstName, email, img, username, } = user 

  function handleUpdateClick(){
    return 
  }
  console.log({user});
  return (
    <div className="profile-div">
      <p>{firstName}'s Profile</p>
      <img src={img} alt={firstName} className="profile-img" />
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <button onClick={handleUpdateClick}>Update Profile</button>
      <UpdateProfile user={user} setUser={setUser}/>
    </div>

  );
}

export default Profile;