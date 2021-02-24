import React from 'react';
import '../Login.css';

function Login() {
  
  return (
    <div>
      <br />
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default Login;