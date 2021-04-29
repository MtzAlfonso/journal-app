import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="email"
          placeholder="email@example.com"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password-confirmation"
        />
        <button className="btn btn-primary btn-block mt-3" type="submit">
          Sign in
        </button>
        <div className="text-center mt-5">
          <Link className="link" to="/auth/login">
            Already registered?
          </Link>
        </div>
      </form>
    </>
  );
};
