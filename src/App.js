import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import EmailLogin from './components/EmailLogin';
import GamePage from './components/Gamepage';
import Homepage from './components/Homepage';
import Level1 from './components/Level1';
import Register from './components/Register';
import Login from './components/Login';
import Navibar from './components/Navibar';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import store from './store';

export default function App() {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyBWMBTSFZZbqkQY7weHsVi50NvIXJNUbqw',
    authDomain: 'find-waldo-game.firebaseapp.com',
    databaseURL: 'https://find-waldo-game-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'find-waldo-game',
    storageBucket: 'find-waldo-game.appspot.com',
    messagingSenderId: '87978521927',
    appId: '1:87978521927:web:7eb462ff31582ea5fac862',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  // console.log(db);

  const container = document.getElementById('root');
  const userEmail = useSelector((state) => state.userEmail);
  // store.dispatch({ type: 'changeEmail', payload: 'test setEmail' });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ToastAuthSuccess.fire({
      //   icon: 'success',
      //   title: 'Signed in successfully',
      // });
      console.log(user);
      // setUserEmail(user.email);
      // console.log('auth state change logged in');
      // console.log(user.email);
      // ...
    } else {
      // User is signed out
      // console.log('auth state change sign out');
      // ...
    }
  });

  return (
    <div>
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/gamepage" element={<GamePage />} />
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/loginemail" element={<EmailLogin />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
