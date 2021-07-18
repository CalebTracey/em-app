import React from 'react';
import { useSelector } from "react-redux";

const Dashboard = () => {
    const company = useSelector(state => state.company);

    return (
        <div>
            <div>Dashboard1234</div>
            <div>{company.companyName}</div>
        </div>
    );
};

export default Dashboard;