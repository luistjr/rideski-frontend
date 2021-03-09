import { useState } from 'react'; 
import { useHistory } from 'react-router-dom'; 

import '../Login.css';

function Login({ setUser }) {

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
        setUser(data);
        history.push("/");
      })
  }

  return (
    <div>
      <br />
      <form onSubmit={handleLoginClick} >
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} autoComplete="off" className="ui button"/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete="off" className="ui button"/>
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default Login;