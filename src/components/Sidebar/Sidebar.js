// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../logo/OmWhite.png';

const Sidebar = () => {
  const [showMasters, setShowMasters] = useState(false);

  const toggleMasters = () => {
    setShowMasters(!showMasters);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      
      <ul>
        <li>DashBoard</li>
        <li onClick={toggleMasters} className={`dropdown ${showMasters ? 'active' : ''}`}>
          Masters {showMasters ? '▲' : '▼'}
          {showMasters && (
            <ul className="dropdown-menu">
              <li>Employee</li>
              <li>Vehicle's</li>
              <li>Route's</li>
            </ul>
          )}
        </li>
        <li>Reports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
