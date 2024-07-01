import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import EmpTable from './components/EmployeeTable/EmpTable';
import './styles/App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
      <Navbar/>
       
        <EmpTable />
      </div>
    </div>
  );
}

export default App;
