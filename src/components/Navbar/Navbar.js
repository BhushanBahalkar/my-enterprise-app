import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faExpand, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
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
    <nav className="navbar">
      <div className="navbar-search">
        <input type="text" placeholder="Search By Vehicle Name / Employee Name" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faExpand} />
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="navbar-datetime">
        <span>{formatDate(currentTime)} {formatTime(currentTime)}</span>
      </div>
      <div className="navbar-organization">
        OM Enterprises
      </div>
      <div className="navbar-user">
        <span>Good Morning! Mr. ABC</span>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </div>
    </nav>
  );
};

export default Navbar;
