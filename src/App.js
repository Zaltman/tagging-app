import React from 'react';
import './App.css';
// import Reduxtest from './components/Reduxtest';
import { Link } from 'react-router-dom';
import Testlink from './components/Testlink';

function App() {
  return (
    <div className="App">
      {/* <Reduxtest /> */}
      <header></header>
      <div>
        <div>user email</div>
        <Link to={'/loginemail'}>Log in</Link>
      </div>
      <div className="App-header">
        <div className="navCont">
          <Link to={'/'}>Home</Link>
          <Link to={'/gamepage'}>Game</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
