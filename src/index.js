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
    </Provider>
  </BrowserRouter>
);
