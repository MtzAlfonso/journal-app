import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { setError } from './uiActions';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'Pedro'));
    }, 3500);
  };
};

export const startRegisterWithEmailPassword = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch(({ message }) => {
        dispatch(setError(message));
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user: { displayName, uid } }) => {
        dispatch(login(uid, displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});
