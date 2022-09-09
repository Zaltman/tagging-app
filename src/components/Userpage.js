import store from '../store';
import { useSelector } from 'react-redux';
// import signOut from './signOut';
import { signOut, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import setUserEmail from './setUserEmail';

export default function Userpage() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const userEmail = useSelector((state) => state.userEmail);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        setUserEmail('Log in');
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="homePage">
      <h1>Userpage</h1>
      <p>{userEmail}</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
