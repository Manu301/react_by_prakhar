"use client"
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [timer, setTimer] = useState(300); 
    const [isRunning, setIsRunning] = useState(false);
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (isRunning) {
            const intervalId = setInterval(() => {
            if (timer > 0) {
                setTimer((prevTimer) => prevTimer - 1);
                updateTimer();
            } else {
            clearInterval(intervalId);
            setIsRunning(false);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }
}, [isRunning, timer]);

    const updateTimer = () => {
    const min = Math.floor(timer / 60);
    const sec = timer % 60;

    setMinutes(min);
    setSeconds(sec);

    document.title = `${min}:${sec < 10 ? `0${sec}` : sec} - Timer App`;
    };

    const runTimer = () => {
    setIsRunning(true);
    };

return (
    <div className='h-full bg-black text-white flex flex-col items-center justify-center'>
        <h1 className='text-3xl mb-4'>Timer App</h1>
        <div className='text-6xl mb-4'>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <button onClick={runTimer}>Start Timer</button>
    </div>
);
};

export default Page;
