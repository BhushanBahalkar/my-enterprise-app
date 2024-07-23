import React, { useState } from 'react';
import EmpModal from '../Vehicle/Vehiclemodal';
import './Vehicle.css';

const EmpTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vehicles, setVehicles] = useState([]);
    const [editingVehicle, setEditingVehicle] = useState(null); // State to track the vehicle being edited

    const addVehicle = (newVehicle) => {
        setVehicles([...vehicles, newVehicle]);
    };

    const deleteVehicle = (id) => {
        const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== id);
        setVehicles(updatedVehicles);
    };

    const editVehicle = (id) => {
        const vehicleToEdit = vehicles.find(vehicle => vehicle.id === id);
        setEditingVehicle(vehicleToEdit);
        setIsModalOpen(true);
    };

    const updateVehicle = (updatedVehicle) => {
        const updatedVehicles = vehicles.map(vehicle =>
            vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
        );
        setVehicles(updatedVehicles);
        setIsModalOpen(false);
        setEditingVehicle(null);
    };

    return (
        <div className="emp-table">
            <button id='bt1' onClick={() => setIsModalOpen(true)}>Add Vehicle Number</button>
            <table className='table1'>
                <thead>
                    <tr id='tr1'>
                        <th>Action</th>
                        <th>Sr. No.</th>
                        <th>Vehicle Number</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index) => (
                        <tr key={vehicle.id}>
                            <td>
                                <span className="material-symbols-outlined" onClick={() => editVehicle(vehicle.id)}>
                                    edit
                                </span>
                                <span className="material-symbols-outlined" onClick={() => deleteVehicle(vehicle.id)}>
                                    delete
                                </span>
                            </td>
                            <td>{index + 1}</td>
                            <td>{vehicle.vehicleNumber}</td>
                            <td className={vehicle.status === 'Active' ? 'active' : 'inactive'}>{vehicle.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EmpModal
                isOpen={isModalOpen}
                onRequestClose={() => {
                    setIsModalOpen(false);
                    setEditingVehicle(null);
                }}
                vehicles={vehicles}
                addVehicle={addVehicle}
                editingVehicle={editingVehicle} // Pass editingVehicle to the modal for editing
                updateVehicle={updateVehicle} // Pass updateVehicle function to update the edited vehicle
            />
        </div>
    );
};

export default EmpTable;
