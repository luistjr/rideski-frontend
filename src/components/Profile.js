import { useEffect } from 'react';
import '../Profile.css';
import UpdateProfile from './UpdateProfile';

function Profile({ user, setUser, setShowHome }) {

  const { first_name, email, img, username, } = user
  // const [displayUpdateProfile, setDisplayUpdateProfile] = useState(false);

  useEffect(() => {
    setShowHome(false)
  }, [setShowHome])

  return (
    <div>
      <div className="profile-div">
        <br />
        <h1>{first_name}'s Profile</h1>
        <img src={img} alt={first_name} className="ui avatar image" />
        <h4>Email: {email}</h4>
        <h4>Username: {username}</h4>
      </div>
      <hr />
      <div className="update-buttons">
        <br />
        <UpdateProfile user={user} setUser={setUser} />
        <br />
        <br />
        <br />
        <br />
      </div>

    </div>

  );
}

export default Profile;