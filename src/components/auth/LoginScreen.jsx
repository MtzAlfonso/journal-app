import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleButton } from '../ui/GoogleButton';

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form>
        <input
          className="auth__input"
          type="email"
          placeholder="email@example.com"
          name="email"
          autocomplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
        />
        <button className="btn btn-primary btn-block mt-3" type="submit">
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <GoogleButton />
        </div>
        <Link className="link" to="/auth/register">Create new account</Link>
      </form>
    </>
  );
};
