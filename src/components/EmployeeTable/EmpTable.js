import React, { useState } from 'react';
import EmpModal from '../EmployeeTable/EmployeeModal/EmpModal';
import './EmplTable.css';

const EmpTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State to hold the selected employee for editing

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const editEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true); // Open the modal for editing
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    setIsModalOpen(false); // Close the modal after update
    setSelectedEmployee(null); // Clear selected employee state
  };

  return (
    <div className="emp-table">
      <button id='bt1' onClick={() => setIsModalOpen(true)}>Add New Employee</button>
      <table className='table1'>
        <thead>
          <tr id='tr1'>
            <th>Action</th>
            <th>Sr. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Adhar Number</th>
            <th>Status</th>
            <th>Mobile Number</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td>
                <span className="material-symbols-outlined" onClick={() => deleteEmployee(emp.id)}>
                  delete
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="material-symbols-outlined" onClick={() => editEmployee(emp)}>
                  edit
                </span>
              </td>
              <td>{index + 1}</td>
              <td>{emp.EmployeName}</td>
              <td>{emp.EmployeLastname}</td>
              <td>{emp.AdharNo}</td>
              <td className={emp.status === 'Active' ? 'active' : 'inactive'}>{emp.status}</td>
              <td>{emp.EmployeNumber}</td>
              <td>
                {emp.image ? <img src={emp.image} alt="Employee" style={{ width: '50px', height: '50px' }} /> : 'No Image'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EmpModal
        isOpen={isModalOpen}
        onRequestClose={() => { setIsModalOpen(false); setSelectedEmployee(null); }}
        employees={employees}
        addEmployee={addEmployee}
        selectedEmployee={selectedEmployee}
        updateEmployee={updateEmployee}
      />
    </div>
  );
};

export default EmpTable;
