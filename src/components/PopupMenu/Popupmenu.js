import React, { useState } from 'react';
import './PopupMenu.css';

const Popupmenu = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={isPopupOpen ? 'app blurred' : 'app'}>
      <button onClick={togglePopup}>Open Popup</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>&times;</span>
            <h2>Popup Form</h2>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <br />
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popupmenu;
