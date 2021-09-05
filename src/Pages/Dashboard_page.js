import React from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";

const Dashboard_page = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    );
};

export default Dashboard_page;