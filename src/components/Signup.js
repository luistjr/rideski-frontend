import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup( {user, setUser} ) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const newUser = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    img: "https://i.ebayimg.com/images/g/vV4AAOSwRLZT2aca/s-l1600.jpg",
    username: username,
    password: password
  }

  function handleSignupClick(e) {
    e.preventDefault();

    fetch('http://[::1]:3001/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then((data) => {setUser(data);
        history.push("/");
      })
  };

  console.log('sign up user', {user})

  return (
    <div>
      <br />
      <form onSubmit={handleSignupClick}>
        <input type="text" name="firstname" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type="text" name="lastname" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input type="text" name="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" name="username" autoComplete="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" name="password" autoComplete="current-password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default Signup;