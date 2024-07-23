import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="menu">
        <Link to="/" className="link">
          <li className="menu-item">
            <span className="material-symbols-outlined">dashboard</span> Dashboard
          </li>
        </Link>
        <li id="li1" className={`menu-item dropdown ${dropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          <span className="material-symbols-outlined">supervisor_account</span> Master
          <span className="material-symbols-outlined">
            {dropdownOpen ? 'expand_less' : 'expand_more'}
          </span>
        </li>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <Link to="/employees" className="link">
              <li className="dropdown-item">
                <span className="material-symbols-outlined">person_apron</span> Employees
              </li>
            </Link>
            <Link to="/a" className="link">
              <li className="dropdown-item">
                <span className="material-symbols-outlined">local_shipping</span> Vehicles
              </li>
            </Link>
            <Link to="/routes" className="link">
              <li className="dropdown-item">
                <span className="material-symbols-outlined">alt_route</span> Routes
              </li>
            </Link>
          </ul>
        )}
        <Link to="/reports" className="link">
          <li className="menu-item">
            <span className="material-symbols-outlined">partner_reports</span> Reports
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
