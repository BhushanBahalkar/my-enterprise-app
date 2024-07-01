// Header.js
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="header">
      
      <div className="header-info">
        <span>{formatDate(currentTime)} {formatTime(currentTime)}</span>
        <span>Om Enterprises</span>
        <span>Good Morning! Mr. ABC</span>
      </div>
    </div>
  );
};

export default Header;
