import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import stopStopWatch from './reducers/stopwatch/stopStopWatch';
import storeTime from './reducers/time/storeTime';
export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const running = useSelector((state) => state.stopWatch.isRunning);
  const location = useLocation();
  if (location.pathname !== '/level/0' && running == true) {
    stopStopWatch();
  }
  if (running == false && time !== 0) {
    setTimeout(() => {
      setTime(0);
    }, 1000);
  }

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
      storeTime(time);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className=" w-fit h-fit ">
      <div className="text-xl text-red-500  rounded-md p-1">
        <span className=" ">{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className=" ">{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span className=" ">{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons"></div>
    </div>
  );
}
