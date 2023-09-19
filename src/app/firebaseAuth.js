// firebaseAuth.js

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './firebase';

const auth = getAuth(firebaseApp);

export const signInWithEmailAndPasswordHandler = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
