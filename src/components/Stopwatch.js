import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import storeTime from './reducers/time/storeTime';
export default function Stopwatch() {
  const [time, setTime] = useState(0);
  //   const [running, setRunning] = useState(false);
  const running = useSelector((state) => state.stopWatch.isRunning);

  // console.log(running);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
      console.log(time);
      storeTime(time);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="fixed left-1/2 -translate-x-1/2 ">
      <div className="text-xl text-red-500 bg-black rounded-md p-1">
        <span className=" bg-black">{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className=" bg-black">{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span className=" bg-black">{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        {/* <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button> */}
      </div>
    </div>
  );
}
