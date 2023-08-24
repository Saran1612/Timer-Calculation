import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const timeRef = useRef(0);

  useEffect(() => {
    if (isActive) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timeRef.current);
    }
    return () => {
      clearInterval(timeRef.current);
    };
  }, [isActive]);

  const handleStop = () => {
    console.log('stop');
    setIsActive(false);
  };
  const handleStart = () => {
    console.log('start');
    setIsActive(true);
  };
  const handleReset = () => {
    console.log('reset');

    setIsActive(false);
    setTime(0);
  };

  return (
    <>
      <h1 style={{ width: '100%', textAlign: 'center' }}>{time}</h1>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default Timer;
