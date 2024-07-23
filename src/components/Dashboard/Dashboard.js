// src/components/Dashboard/Dashboard.js
import React, { PureComponent } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css'
const data = [
    { name: 'Monday', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Tuesday', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Wednesday', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Thursday', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Friday', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Saturday', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Sunday', uv: 3490, pv: 4300, amt: 2100 },
];

const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class Dashboard extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

    render() {
        return (
            <section className="container" id='main'>
                <div className="cards-area flex">
                    <div className="card-1">
                        <div className="logo flex">
                            <p className="employee">Employee &nbsp; &nbsp;  <span class="material-symbols-outlined">
                                business_center
                            </span></p>
                           
                        </div>
                        <br />
                        <div className="Total-employees">
                            <p>
                                <span style={{ color: '#073763' }} size="14px">
                                    Total Employees - <b>150</b>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="card-2">
                        <div className="logo flex">
                            <p className="employee">Vehicle &nbsp; &nbsp;<span class="material-symbols-outlined" >
                                local_shipping
                            </span> </p>
                            
                        </div>
                        <br />
                        <div className="Total-employees">
                            <p>
                                <span style={{ color: '#073763' }} size="14px">
                                    Total Vehicles - <b>150</b>
                                </span>
                            </p>
                            <br />
                        </div>
                    </div>

                    <div className="card-3">
                        <div className="logo flex">
                            <p className="employee">Inventory &nbsp; &nbsp;  <span class="material-symbols-outlined">
                                inventory_2
                            </span></p>
                           
                        </div>
                        <br />
                        <div className="Total-employees">
                            <p>
                                <span style={{ color: '#073763' }} size="14px">
                                    Total - <b>150</b>
                                </span>
                            </p>
                            <br />
                        </div>
                    </div>
                </div>


                <div className='main' id='main'>
                    <div style={{ width: '400px', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#b84041" />
                                <Bar dataKey="uv" fill="#165996" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div style={{ width: '400px', height: 300 }}>
                        <ResponsiveContainer>
                            <LineChart
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#f30e1f" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#0f9d58" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div style={{ width: '400px', height: 300 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
