import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { handleLogin, isLoggedIn } from '../services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(email, password);
    navigate(`/app/profile`);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(`/app/profile`);
    }
  });

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
