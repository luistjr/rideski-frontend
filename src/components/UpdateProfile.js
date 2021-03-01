import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function UpdateProfile({ user, setUser }) {

  const { id, firstName, lastName, email, username, password, img } = user

  // let history = useHistory();

  const [updateFirstName, setUpdateFirstName] = useState(firstName);
  const [updateLastName, setUpdateLastName] = useState(lastName);
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
        setUser({
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          img: "https://i.ebayimg.com/images/g/vV4AAOSwRLZT2aca/s-l1600.jpg",
          username: username,
          password: password
        });
        // history.push("/");
      })
  }

  return (
    <div>
      <br />
      <p>Update Your Account Details</p>

      <form onSubmit={handleUpdateClick}>
        <input type="text" name="firstname" placeholder="First Name" value={updateFirstName} onChange={e => setUpdateFirstName(e.target.value)} />
        <input type="text" name="lastname" placeholder="Last Name" value={updateLastName} onChange={e => setUpdateLastName(e.target.value)} />
        <input type="text" name="email" placeholder="Email Address" value={updateEmail} onChange={e => setUpdateEmail(e.target.value)} />
        <input type="text" name="username" placeholder="Username" value={updateUsername} onChange={e => setUpdateUsername(e.target.value)} />
        <input type="password" name="password" placeholder="Password" value={updatePassword} onChange={e => setUpdatePassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default UpdateProfile;