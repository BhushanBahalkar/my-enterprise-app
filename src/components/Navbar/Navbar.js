import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../logo/logoom.png';

const Navbar = ({ toggleSidebar, onLogout }) => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <nav className="navbar">
      <span id='m1' className="material-symbols-outlined" onClick={toggleSidebar}>menu</span>
      <div className="logo">
        <img id='img' src={logo} alt="Logo" />
      </div>
      <div className="dash">|</div>
      <div className="navbar-datetime">
        <span>{formatDate(currentTime)} {formatTime(currentTime)}</span>
      </div>
      <div className="dash">|</div>
      <div className="navbar-user">
        <span>Mr. ABC</span><br></br>
        <FontAwesomeIcon icon={faSignOutAlt} aria-label="Sign Out" onClick={onLogout} />
      </div>
      <div className="dash">|</div>
      <div className="navbar-icons" onClick={toggleFullscreen}>
        <FontAwesomeIcon icon={faExpand} aria-label="Expand" />
      </div>
    </nav>
  );
};

export default Navbar;
