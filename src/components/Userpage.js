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
        className="text-center text-2xl mb-2 p-1 bg-red-600 rounded-md text-white mt-8 w-[150px] hover:bg-red-700"
        to={'/login'}
      >
        Login
      </Link>
    );
  } else
    signInElement = (
      <div className="flex flex-col items-center absolute w-full">
        <p className=" text-2xl">Email: {userEmail}</p>
        <button
          onClick={handleSignOut}
          className="text-center text-2xl mb-2 p-1 bg-red-600 rounded-md text-white mt-8 w-[150px] hover:bg-red-700"
        >
          Sign out
        </button>
      </div>
    );
  return <div className="flex flex-col items-center m-16 absolute w-full">{signInElement}</div>;
}
