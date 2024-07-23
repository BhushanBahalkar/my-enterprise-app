import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './EmplModal.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

const EmpModal = ({ isOpen, onRequestClose, employees, addEmployee, selectedEmployee, updateEmployee }) => {
  const [EmployeName, setEmployeName] = useState('');
  const [EmployeLastname, setEmployeLastname] = useState('');
  const [AdharNo, setAdharNo] = useState('');
  const [EmployeNumber, setEmployeNumber] = useState('');
  const [active, setActive] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selectedEmployee) {
      setEmployeName(selectedEmployee.EmployeName);
      setEmployeLastname(selectedEmployee.EmployeLastname);
      setAdharNo(selectedEmployee.AdharNo);
      setEmployeNumber(selectedEmployee.EmployeNumber);
      setActive(selectedEmployee.status === 'Active');
      setImage(selectedEmployee.image);
    } else {
      setEmployeName('');
      setEmployeLastname('');
      setAdharNo('');
      setEmployeNumber('');
      setActive(false);
      setImage(null);
    }
  }, [selectedEmployee]);

  const handleAddOrUpdate = () => {
    const newErrors = validateFields();
    if (Object.keys(newErrors).length === 0) {
      const employeeData = {
        id: selectedEmployee ? selectedEmployee.id : employees.length + 1,
        EmployeName,
        EmployeLastname,
        EmployeNumber,
        AdharNo,
        status: active ? 'Active' : 'In Active',
        image,
      };

      if (selectedEmployee) {
        updateEmployee(employeeData);
      } else {
        addEmployee(employeeData);
      }
      onRequestClose();
    } else {
      const errorMessages = Object.values(newErrors).join('\n');
      alert(`Please fill in all required fields:\n${errorMessages}`);
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!EmployeName.trim()) newErrors.EmployeName = 'First Name is required';
    if (!EmployeLastname.trim()) newErrors.EmployeLastname = 'Last Name is required';
    if (!AdharNo.trim()) newErrors.AdharNo = 'Adhar Number is required';
    if (!EmployeNumber.trim()) newErrors.EmployeNumber = 'Mobile Number is required';
    return newErrors;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdharNoChange = (e) => {
    const value = e.target.value;
    const regex = /^\d{0,12}$/;
    if (regex.test(value)) {
      setAdharNo(value);
    }
  };

  const handleEmployeNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^\d{0,10}$/;
    if (regex.test(value)) {
      setEmployeNumber(value);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay">
      <div className="modal-header">
        <h2 id='h1'>{selectedEmployee ? 'Edit Employee' : 'Add New Employee'}</h2>
        <div className="modal-content">
          <div className="form-group">
            <input 
              id='t1' 
              type="text" 
              placeholder='First Name' 
              value={EmployeName} 
              onChange={(e) => setEmployeName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <input 
              id='t1' 
              type="text" 
              placeholder='Last Name' 
              value={EmployeLastname} 
              onChange={(e) => setEmployeLastname(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <input 
              id='t2' 
              type="text" 
              placeholder='Adhar Number' 
              value={AdharNo} 
              onChange={handleAdharNoChange} 
            />
          </div>
        </div>
        <div className='d1'>
          <div className="form-group">
            <input 
              id='t3' 
              type="text" 
              placeholder='Mobile Number' 
              value={EmployeNumber} 
              onChange={handleEmployeNumberChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="file-upload" className="file-upload-label">
              <span className="material-symbols-outlined" id='upload'>
                upload_file
              </span>
            </label>
            <input id="file-upload" type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
          </div>
          {image && <img src={image} alt="Employee" style={{ width: '100px', height: '100px' }} />}
          <div className="form-group" id='c2'>
            <label>
              <input type="checkbox" checked={active} onChange={() => setActive(!active)} />
              Active
            </label>
          </div>
        </div>
      </div>
      <div className='d2'>
        <button id='b1' onClick={handleAddOrUpdate}>
          {selectedEmployee ? 'Update' : 'Add'}
        </button>
      </div>
    </Modal>
  );
};

export default EmpModal;
