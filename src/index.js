import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage';
import Register from './components/Register';
import GamePage from './components/Gamepage';
import AuthPage from './components/AuthPage';
import EmailLogin from './components/EmailLogin';
import Login from './components/Login';
import Userpage from './components/Userpage';
import Welcome from './components/Welcome';
import Highscores from './components/Highscores';
import Level from './components/Level';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      <Routes>
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
    </Provider>
  </BrowserRouter>
);
