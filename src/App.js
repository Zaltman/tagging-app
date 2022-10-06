import React from 'react';
import './index.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import EmailLogin from './components/EmailLogin';
import GamePage from './components/Gamepage';
import Homepage from './components/Homepage';
import Level from './components/Level';
import Userpage from './components/Userpage';
import Register from './components/Register';
import Login from './components/Login';
import Navibar from './components/Navibar';
import Welcome from './components/Welcome';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import setUserEmail from './components/reducers/email/setUserEmail';
import { firebaseConfig } from './components/firebaseConfig';
import Toast from './components/Toast';
import { toast } from 'react-toastify';
import Highscores from './components/Highscores';
import { animated, useTransition, useSpring } from 'react-spring';
import GetAndSetHighscoreArr from './components/GeAndSetHighscoreArr';
import { useSelector } from 'react-redux';
export default function App() {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const location = useLocation();
  console.log(location.pathname);
  const transitions = useTransition(location, {
    key: (location) => location.pathname,
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(-50%, 0)' },
    config: { precision: 0.0001 },
  });
  const highscoresArr = useSelector((state) => state.highscore);
  if (highscoresArr.length === 0) {
    console.log(true);
    GetAndSetHighscoreArr();
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUserEmail(user.email);
    } else {
      // User is signed out
      // console.log('auth state change sign out');
      setUserEmail('Log in');
    }
  });

  return (
    <div className="flex flex-col justify-center w-fit min-w-full">
      <Toast />
      <Navibar />
      {transitions((styles, location) => (
        <animated.div style={styles}>
          <Routes location={location}>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/gamepage" element={<GamePage />} />
            <Route path="/authpage" element={<AuthPage />} />
            <Route path="/loginemail" element={<EmailLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userpage" element={<Userpage />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/highscores" element={<Highscores />} />
            <Route path="/level/:id" element={<Level />} />

            <Route
              path="*"
              element={
                <main style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </animated.div>
      ))}
    </div>
  );
}
