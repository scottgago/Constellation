import { firebaseAuth, firebaseDb } from './index';
import {
  INIT_AUTH,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './action-types';

//firebaseDB = firebase.database()

export function setupUser(userID) {
  firebaseDb.ref(`users/${userID}`).once('value')
    .then(function(snapshot) {
      if(snapshot.val()) {
        console.log('dooooooowewewewewewewewewe', snapshot.val());
      }
      else {
        console.log('uuuuuuuuuussssssseeeeerrrr', userID);
        firebaseDb.ref(`users/${userID}`).set({
          admin: true,
          visited: false
        })
      }
    })

}

function authenticate(provider) {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then((result) => {
        dispatch(signInSuccess(result));
      })
      .catch(error => dispatch(signInError(error)));
  };
}

export function initAuth(user) {
  return {
    type: INIT_AUTH,
    payload: user
  };
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  };
}

export function signInSuccess(result) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result.user
  };
}

// export function signInWithGithub() {
//   return authenticate(new firebase.auth.GithubAuthProvider());
// }
// export function signInWithTwitter() {
//   return authenticate(new firebase.auth.TwitterAuthProvider());
// }

export function signInWithGoogle() {
  return authenticate(new firebase.auth.GoogleAuthProvider());
}

export function signOut() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  };
}
