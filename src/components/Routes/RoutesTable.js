import React, { useState } from 'react';
import EmpModal from './Routes';
import './RoutesTable.css';

const EmpTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [routes, setRoutes] = useState([]);
    const [editingRoute, setEditingRoute] = useState(null);

    const addRoute = (newRoute) => {
        setRoutes([...routes, newRoute]);
    };

    const deleteRoute = (id) => {
        const updatedRoutes = routes.filter(route => route.id !== id);
        setRoutes(updatedRoutes);
    };

    const editRoute = (id) => {
        const routeToEdit = routes.find(route => route.id === id);
        setEditingRoute(routeToEdit);
        setIsModalOpen(true);
    };

    const updateRoute = (updatedRoute) => {
        const updatedRoutes = routes.map(route =>
            route.id === updatedRoute.id ? updatedRoute : route
        );
        setRoutes(updatedRoutes);
        setIsModalOpen(false);
        setEditingRoute(null);
    };

    return (
        <div className="emp-table">
            <button id='bt1' onClick={() => setIsModalOpen(true)}>Add Route Number</button>
            <table className='table1'>
                <thead>
                    <tr id='tr1'>
                        <th>Action</th>
                        <th>Sr. No.</th>
                        <th>Route Name</th>
                    </tr>
                </thead>
                <tbody>
                    {routes.map((route, index) => (
                        <tr key={route.id}>
                            <td>
                                <span className="material-symbols-outlined" onClick={() => editRoute(route.id)}>
                                    edit
                                </span>
                                <span className="material-symbols-outlined" onClick={() => deleteRoute(route.id)}>
                                    delete
                                </span>
                            </td>
                            <td>{index + 1}</td>
                            <td>{route.routename}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EmpModal
                isOpen={isModalOpen}
                onRequestClose={() => {
                    setIsModalOpen(false);
                    setEditingRoute(null);
                }}
                routes={routes}
                addroute={addRoute} // Ensure this matches the function name
                editingroute={editingRoute}
                updateroute={updateRoute}
            />
        </div>
    );
};

export default EmpTable;
