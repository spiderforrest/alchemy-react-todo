import React from 'react';
import { AuthContext } from

export default function Auth() {
  return (
    <main>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button>Submit</button>
    </main>
  );
}
