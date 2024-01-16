"use client"
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [clickTime, setClickTime] = useState(null);

  useEffect(() => {
    startNewGame(); // Start a new game when the component mounts
  }, []);

  const startNewGame = () => {
    setIsGreen(true);
    setStartTime(null);
    setClickTime(null);

    // Set a timeout to change the color to red after a random time (less than 10 seconds)
    const timeoutId = setTimeout(() => {
      setIsGreen(false);
      setStartTime(new Date()); // Record the start time when the color changes
    }, Math.floor(Math.random() * 10000));

    // Cleanup the timeout when the component unmounts or a new game starts
    return () => clearTimeout(timeoutId);
  };

  const handleClick = () => {
    // Allow clicking only when the color has changed to red
    if (!clickTime && !isGreen) {
      // Record the time when the user clicks
      setClickTime(new Date());
    }
  };

  const getElapsedTime = () => {
    if (startTime && clickTime) {
      const elapsedMilliseconds = clickTime - startTime;
      const elapsedSeconds = (elapsedMilliseconds / 1000).toFixed(2);
      return `Time taken: ${elapsedSeconds} seconds`;
    }
    return '';
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{ height: '50px', width: '100%', backgroundColor: isGreen ? 'green' : 'red' }}
        onClick={handleClick}
      ></div>
      <div style={{ marginTop: '3px', fontSize: '1rem' }}>{getElapsedTime()}</div>
      <button style={{ marginTop: '10px' }} onClick={startNewGame} className='bg-white text-black text-2xl py-5 px-2 click'>Start New Game</button>
    </div>
  );
};

export default Page;
