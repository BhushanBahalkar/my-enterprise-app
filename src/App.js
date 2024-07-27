import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'; 
import EmpTable from './components/EmployeeTable/EmpTable';
import Navbar from './components/Navbar/Navbar';
import RoutesTable from './components/Routes/RoutesTable';
import Sidebar from './components/Sidebar/Sidebar';
import Vehicle from './components/Vehicle/Vehicle';
import Report from './components/Reports/Report';
import Login from './components/LoginForm/LoginForm';
import './styles/App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {isLoggedIn ? (
          <>
            <Sidebar isOpen={isSidebarOpen} />
            <div className="main-content">
              <Navbar toggleSidebar={toggleSidebar} onLogout={() => setIsLoggedIn(false)} />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/employees" element={<EmpTable />} />
                  <Route path="/a" element={<Vehicle />} />
                  <Route path="/routes" element={<RoutesTable/>}/>
                  <Route path="/reports" element={<Report/>}/>
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Login onLogin={() => setIsLoggedIn(true)} />
        )}
      </div>
    </Router>
  );
}

export default App;
