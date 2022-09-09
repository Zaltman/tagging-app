import { signOut, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
// const auth = getAuth();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default signOut = auth
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
