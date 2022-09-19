import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  //   const [running, setRunning] = useState(false);
  let running = useSelector((state) => state.running);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="fixed left-1/2 -translate-x-1/2 ">
      <div className="text-xl text-red-500">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        {/* <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button> */}
      </div>
    </div>
  );
}
