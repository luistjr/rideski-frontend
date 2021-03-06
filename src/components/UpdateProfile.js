import { useState } from 'react';
import '../App.css';
// import { useHistory } from 'react-router-dom';

function UpdateProfile({ user, setUser }) {

  const { id, first_name, last_name, email, username, password, img } = user

  // let history = useHistory();

  const [updateFirstName, setUpdateFirstName] = useState(first_name);
  const [updateLastName, setUpdateLastName] = useState(last_name);
  const [updateEmail, setUpdateEmail] = useState(email);
  // const [updateImg, setUpdateImg] = useState(img);
  const [updateUsername, setUpdateUsername] = useState(username);
  const [updatePassword, setUpdatePassword] = useState(password);

  const updateUser = {
    first_name: updateFirstName,
    last_name: updateLastName,
    email: updateEmail,
    img: img,
    username: updateUsername,
    password: updatePassword
  }

  function handleUpdateClick(e) {
    e.preventDefault();

    fetch(`http://[::1]:3001/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateUser),
    })
      .then(response => response.json())
      .then((data) => {
        setUser(data);
        // history.push("/");
      })
  }

  return (
    <div>
      <p>Update Your Account Details</p>

      <form onSubmit={handleUpdateClick} className="update-form">
        <input type="text" name="firstname" placeholder="First Name" value={updateFirstName} onChange={e => setUpdateFirstName(e.target.value)} className="ui button"/>
        <input type="text" name="lastname" placeholder="Last Name" value={updateLastName} onChange={e => setUpdateLastName(e.target.value)} className="ui button"/>
        <input type="text" name="email" placeholder="Email Address" value={updateEmail} onChange={e => setUpdateEmail(e.target.value)} className="ui button"/>
        <input type="text" name="username" placeholder="Username" value={updateUsername} onChange={e => setUpdateUsername(e.target.value)} className="ui button"/>
        <input type="current-password" name="current-password" placeholder="Password" value={updatePassword} onChange={e => setUpdatePassword(e.target.value)} className="ui button"/>
        <button type="submit" >Submit </button>
      </form>
    </div>

  );
}

export default UpdateProfile;