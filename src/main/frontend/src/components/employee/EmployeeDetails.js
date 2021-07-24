import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';
import useEmployees from '../../hooks/useEmployees';
import EmployeeDetailsCard from './EmployeeDetailsCard'
import useTeams from '../../hooks/useTeams';


const EmployeeDetails = () => {
    useEmployees();
    useTeams();
    const employeeSelected = useSelector(state => state.employees.employeeSelected);
    const teams = useSelector(state => state.teams.teamData);
    const [employee, setEmployee] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkEmployee = () => {
            if (employeeSelected) {
                setEmployee(employeeSelected);

                setIsLoading(false)
                return;
            }
        }
        checkEmployee();
    }, [employeeSelected]);

    return (
        <div>
            <Skeleton loading={isLoading} active>
                <EmployeeDetailsCard employee={employee} teams={teams} />
            </Skeleton>
            { employeeSelected ? null : <Redirect to="/" />}
        </div>
    )
};

export default EmployeeDetails;

