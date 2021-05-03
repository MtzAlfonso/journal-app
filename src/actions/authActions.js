import Swal from 'sweetalert2';
import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './uiActions';
import { noteLogout } from './notesActions';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user: { uid, displayName } }) => {
        dispatch(login(uid, displayName));
      })
      .catch(({ message }) => {
        Swal.fire('Auth error', message, 'error');
      })
      .finally(() => {
        dispatch(finishLoading());
      });
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
        Swal.fire('Register error', message, 'error');
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

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(noteLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
