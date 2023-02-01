import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext.js';
import { signInUser, signUpUser } from '../services/client.js';

export default function Auth(signUpBool) {
  const { setUser } = useAuthContext();
  let [email, setEmail] = useState('');
  let [passwd, setPasswd] = useState('');
  function authHandler() {
    if (!email && !passwd) return;
    if (signUp) {
      setUser(signUpUser(email, passwd));
    } else {
      setUser(signInUser(email, passwd));
    }
  }
  // track if this is signing in or signing up with a bool state
  const [signUp, setSignUp] = useState(signUpBool);
  return (
    <main>
      <h3>{signUp ? 'Sign up' : 'Sign in'}</h3>
      <label>
        Email
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
        />
      </label>
      <label>
        Password
        <input
          onChange={(e) => {
            setPasswd(e.target.value);
          }}
          type="password"
        />
      </label>
      <button
        onClick={() => {
          authHandler();
        }}
      >
        Submit
      </button>
      {/* allow toggling sign up/in */}
      <button
        onClick={() => {
          setSignUp(!signUp);
        }}
      >
        {signUp ? 'Sign in instead?' : 'Sign up instead?'}
      </button>
    </main>
  );
}
