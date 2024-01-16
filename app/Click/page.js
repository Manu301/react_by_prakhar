"use client"
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [clickCount, setClickCount] = useState(0);
  const [timer, setTimer] = useState(2);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isTimerRunning && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning, timer]);

  const handleButtonClick = () => {
    setTimer(2);
    setClickCount(0);
    setIsTimerRunning(true);
  };

  const handleDivClick = () => {
    if (isTimerRunning) {
      setClickCount((prevClickCount) => prevClickCount + 1);
    }
  };

  // Display alert when the timer reaches 0
  useEffect(() => {
    if (timer === 0 && isTimerRunning) {
      alert(`Timer ended! Number of clicks: ${clickCount}`);
      setIsTimerRunning(false); // Stop the timer
    }
  }, [timer, isTimerRunning, clickCount]);

  return (
    <div id="click-parent" className="bg-black text-white flex flex-col items-center justify-center">
      <button onClick={handleButtonClick} className='bg-white text-black text-2xl py-5 px-2 click'>
        Start Timer
      </button>
      <div onClick={handleDivClick} className="h-20 w-full bg-green-500 mt-10 text-center text-3xl">
        Click Count: {clickCount}
      </div>
      <div className='text-2xl mt-3'>Time Remaining: {timer} seconds</div>
    </div>
  );
};

export default Page;
