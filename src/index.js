import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
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

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider> */}
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
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
