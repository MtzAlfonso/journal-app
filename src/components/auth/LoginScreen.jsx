import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';
import { GoogleButton } from '../ui/GoogleButton';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const googleHandleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
      >
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
        <button
          className="btn btn-primary btn-block mt-3"
          type="submit"
          disabled={loading}
        >
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <GoogleButton onClick={googleHandleLogin} />
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
