import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const RegisterComponent = () => {
    // State variables
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
  
    async function handleRegister() {
      try {
        // Create a new Parse.User instance
        const user = new Parse.User();
        user.set('username', registerUsername);
        user.set('password', registerPassword);
        // Sign up the user
        await user.signUp();
        console.log('Registered user:', user);
      } catch (error) {
        console.log('Error registering user:', error);
      }
    }
  
    return (
      <div>
        <h2>Registration</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  };