import React, { useState } from 'react';
import Modal from 'react-modal';
import './EmplModal.css';


Modal.setAppElement('#root'); // Set the app element for accessibility

const EmpModal = ({ isOpen, onRequestClose, employees, addEmployee }) => {
  const [unit, setUnit] = useState('');
  const [shift, setShift] = useState('');
  const [flexible, setFlexible] = useState(false);
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [active, setActive] = useState(false);

  const handleAdd = () => {
    const newEmployee = {
      id: employees.length + 1,
      unit,
      organization: 'OM Enterprises',
      shift,
      flexible,
      fromTime,
      toTime,
      hours: 9, // Assuming a fixed 9 hours shift, adjust accordingly
      status: active ? 'Active' : 'In Active',
    };
    addEmployee(newEmployee);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Add New Employee</h2>
      <div className="modal-content">
        <div className="form-group">
          <label>Unit</label>
          <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Shift</label>
          <input type="text" value={shift} onChange={(e) => setShift(e.target.value)} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={flexible} onChange={() => setFlexible(!flexible)} />
            Flexible
          </label>
        </div>
        <div className="form-group">
          <label>From Time</label>
          <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
        </div>
        <div className="form-group">
          <label>To Time</label>
          <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={active} onChange={() => setActive(!active)} />
            Active
          </label>
        </div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Unit</th>
            <th>Organization Name</th>
            <th>Shift</th>
            <th>Flexible</th>
            <th>From Time</th>
            <th>To Time</th>
            <th>Hours</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
              <td>{emp.unit}</td>
              <td>{emp.organization}</td>
              <td>{emp.shift}</td>
              <td>{emp.flexible ? 'Yes' : 'No'}</td>
              <td>{emp.fromTime}</td>
              <td>{emp.toTime}</td>
              <td>{emp.hours}</td>
              <td className={emp.status === 'Active' ? 'active' : 'inactive'}>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onRequestClose}>Save</button>
      <button onClick={onRequestClose}>Reset</button>
    </Modal>
  );
};

export default EmpModal;
