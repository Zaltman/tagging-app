import store from '../store';
import { useSelector } from 'react-redux';
// import signOut from './signOut';
import { signOut, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import setUserEmail from './reducers/email/setUserEmail';
import { Link } from 'react-router-dom';

export default function Userpage() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const userEmail = useSelector((state) => state.email);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        setUserEmail('Log in');
      })
      .catch((error) => {
        // An error happened.
      });
  }
  let signInElement;
  if (userEmail === 'Log in') {
    signInElement = (
      <Link
        className="g-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5"
        to={'/login'}
      >
        Login
      </Link>
    );
  } else
    signInElement = (
      <div className="flex flex-col items-center">
        <p>Email: {userEmail}</p>
        <button
          onClick={handleSignOut}
          className="g-transparent hover:bg-blue-500 text-blue-700 font-semibold m-16 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sign out
        </button>
      </div>
    );
  return <div className="flex flex-col items-center m-16">{signInElement}</div>;
}
