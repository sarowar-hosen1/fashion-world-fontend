import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import "./DashboardChart.css";
const data = [
    { name: 'January', uv: 100, pv: 2400, amt: 2400 },
    { name: 'February', uv: 300, pv: 2400, amt: 2400 },
    { name: 'March', uv: 200, pv: 2400, amt: 2400 },
    { name: 'April', uv: 500, pv: 2400, amt: 2400 },
    { name: 'May', uv: 700, pv: 2400, amt: 2400 },
    { name: 'June', uv: 600, pv: 2400, amt: 2400 },
    { name: 'July', uv: 300, pv: 2400, amt: 2400 },
    { name: 'August', uv: 400, pv: 2400, amt: 2400 },
    { name: 'September', uv: 500, pv: 2400, amt: 2400 },
    { name: 'Octobor', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Novembor', uv: 600, pv: 2400, amt: 2400 },
    { name: 'December', uv: 800, pv: 2400, amt: 2400 },

];;
const DashboardChart = () => {
    return (
        <LineChart width={800} height={280} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default DashboardChart;