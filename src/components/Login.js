import { useState } from 'react'; 
import { useHistory } from 'react-router-dom'; 

import '../Login.css';

function Login({ user, setUser }) {

  let history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value });
  }
  
  function handleLoginClick(e) {
    e.preventDefault();

    fetch('http://[::1]:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setUser({
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          img: data.img,
          username: data.username
        });
        history.push("/");
      })
  }

  return (
    <div>
      <br />
      <form onSubmit={handleLoginClick}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} autoComplete="off" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete="off"/>
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default Login;