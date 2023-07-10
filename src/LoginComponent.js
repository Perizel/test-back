import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const LoginComponent = () => {
  // State variables
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  async function handleLogin() {
    try {
      const user = await Parse.User.logIn(loginUsername, loginPassword);
      console.log('Logged in user:', user);
  
      // Fetch additional user data
      const userData = await user.fetch();
      console.log('User data:', userData);
    } catch (error) {
      console.log('Error logging in:', error);
    }
  }
  

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};