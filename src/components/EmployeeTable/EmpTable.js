import React, { useState } from 'react';
import EmpModal from '../EmployeeTable/EmployeeModal/EmpModal';
import './EmplTable.css';

const EmpTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState([
    { id: 1, unit: 'Unit 1', organization: 'AppyStack Pvt. Ltd.', shift: 'Morning', flexible: false, fromTime: '09:00 AM', toTime: '06:00 PM', hours: 9, status: 'Active' },
    { id: 2, unit: 'Unit 2', organization: 'AppyStack Pvt. Ltd.', shift: 'Evening', flexible: true, fromTime: '', toTime: '', hours: 9, status: 'Active' },
    { id: 3, unit: 'Unit 3', organization: 'AppyStack Pvt. Ltd.', shift: 'Night', flexible: false, fromTime: '09:00 AM', toTime: '06:00 PM', hours: 9, status: 'In Active' },
    { id: 4, unit: 'Unit 4', organization: 'AppyStack Pvt. Ltd.', shift: 'General', flexible: false, fromTime: '09:00 AM', toTime: '06:00 PM', hours: 9, status: 'In Active' },
    { id: 5, unit: 'Unit 5', organization: 'AppyStack Pvt. Ltd.', shift: 'Fixed', flexible: false, fromTime: '09:00 AM', toTime: '06:00 PM', hours: 9, status: 'In Active' },
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="emp-table">
      <button onClick={() => setIsModalOpen(true)}>Add New Employee</button>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Sr. No.</th>
            <th>Organization Name</th>
            <th>Unit</th>
            <th>Shift</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
              <td>{index + 1}</td>
              <td>{emp.organization}</td>
              <td>{emp.unit}</td>
              <td>{emp.shift}</td>
              <td className={emp.status === 'Active' ? 'active' : 'inactive'}>{emp.status}</td>
              <td>{emp.date}</td>
              <td>Super Admin</td>
            </tr>
          ))}
        </tbody>
      </table>
      <EmpModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} employees={employees} addEmployee={addEmployee} />
    </div>
  );
};

export default EmpTable;
