import React, { useState, useEffect } from 'react';

function ClockApp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const refreshTime = () => setTime(new Date());
    const timerId = setInterval(refreshTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  const displayTime = time.toLocaleTimeString();

  return (
    <div style={appStyles.wrapper}>
      <h1 style={appStyles.heading}>Clock Display</h1>
      <h2 style={appStyles.display}>{displayTime}</h2>
    </div>
  );
}

const appStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#333',
    color: '#f0f0f0',
  },
  heading: {
    fontSize: '3rem',
  },
  display: {
    fontSize: '4.5rem',
  },
};

export default ClockApp;