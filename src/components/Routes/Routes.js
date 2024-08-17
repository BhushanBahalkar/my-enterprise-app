import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Routes.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

const EmpModal = ({ isOpen, onRequestClose, routes, addroute, editingroute, updateroute }) => {
    const [routename, setRouteName] = useState('');

    useEffect(() => {
        if (editingroute) {
            setRouteName(editingroute.routename);
        } else {
            setRouteName('');
        }
    }, [editingroute]);

    const handleAddOrUpdate = () => {
        if (routename.trim() === '') {
            alert('Please enter a route name.'); // Alert when route name is empty
            return;
        }

        if (editingroute) {
            updateroute({ ...editingroute, routename });
        } else {
            const newRoute = {
                id: routes.length + 1,
                routename
            };
            addroute(newRoute); // Ensure this matches the prop name
        }

        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="overlay">
            <div className="modal-header">
                <h2 id='h1'>{editingroute ? 'Edit Route Name' : 'Add Route Name'}</h2>
                <div className="modal-content">
                    <div className="form-group">
                        <label htmlFor="route-name"></label>
                        <input
                            id='route-name'
                            type="text"
                            placeholder='Route Name'
                            value={routename}
                            onChange={(e) => setRouteName(e.target.value)}
                        />
                    </div>
                </div>
                <div className='d2'>
                    <button id='b1' onClick={handleAddOrUpdate}>
                        {editingroute ? 'Update' : 'Add'}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default EmpModal;
