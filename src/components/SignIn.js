/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === 'password') {
      setPassword(value);
    } else {
      setEmail(value);
    }
  };

  return (
    <div className="sign-in-component">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" value={email} onChange={handleChange} required />
        <label>Email</label>
        <input name="password" type="password" value={password} onChange={handleChange} required />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
