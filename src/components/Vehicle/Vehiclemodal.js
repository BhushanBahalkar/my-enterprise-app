import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Vehiclemodal.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

const EmpModal = ({ isOpen, onRequestClose, vehicles, addVehicle, editingVehicle, updateVehicle }) => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (editingVehicle) {
            setVehicleNumber(editingVehicle.vehicleNumber);
            setActive(editingVehicle.status === 'Active');
        } else {
            setVehicleNumber('');
            setActive(false);
        }
    }, [editingVehicle]);

    const handleAdd = () => {
        if (vehicleNumber.trim() === '') {
            window.alert('Vehicle Number is required');
            return;
        }

        if (editingVehicle) {
            const updatedVehicle = {
                ...editingVehicle,
                vehicleNumber,
                status: active ? 'Active' : 'Inactive',
            };
            updateVehicle(updatedVehicle);
        } else {
            const newVehicle = {
                id: vehicles.length + 1,
                vehicleNumber,
                status: active ? 'Active' : 'Inactive',
            };
            addVehicle(newVehicle);
        }

        onRequestClose();
        setVehicleNumber('');
        setActive(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="modal-header">
                <h2>{editingVehicle ? 'Edit Vehicle' : 'Add Vehicle'}</h2>
                <div className="modal-content">
                    <div className="form-group">
                        <input
                            id='t1'
                            type="text"
                            placeholder='Vehicle Number'
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group" id='c2'>
                        <label>
                            <input
                                type="checkbox"
                                checked={active}
                                onChange={() => setActive(!active)}
                            />
                            Active
                        </label>
                    </div>
                </div>
                <div className='d2'>
                    <button id='b1' onClick={handleAdd}>{editingVehicle ? 'Update' : 'Add'}</button>
                </div>
            </div>
        </Modal>
    );
};

export default EmpModal;
