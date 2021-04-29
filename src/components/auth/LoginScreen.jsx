import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';
import { GoogleButton } from '../ui/GoogleButton';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'mail@test.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(12345, 'Alfonso'));
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="email"
          placeholder="email@example.com"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mt-3" type="submit">
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <GoogleButton />
        </div>
        <div className="text-center">
          <Link className="link mt-5" to="/auth/register">
            Create new account
          </Link>
        </div>
      </form>
    </>
  );
};
