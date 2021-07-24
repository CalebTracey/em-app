import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';
import useEmployees from '../../hooks/useEmployees';
import EmployeeDetailsCard from './EmployeeDetailsCard'

const EmployeeDetails = () => {
    const employees = useSelector(state => state.employees.employeeData);
    const employeeSelected = useSelector(state => state.employees.employeeSelected);
    const [employee, setEmployee] = useState({});
    const { employeeId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEmployees();


    useEffect(() => {
        const checkEmployee = () => {
            if (employeeSelected) {
                setEmployee(employeeSelected);
                
                setIsLoading(false)
                return;
            // } else {
            //     const match = employees.find(({ id }) => id === eId);
            //     setEmployee(match);
            //     if (employee) {
            //         setIsLoading(false)
            //     }
            }
        }
        checkEmployee();
    }, [employeeSelected, employees, employee]);

    console.log(employee)
    return (
        <Skeleton loading={isLoading} active>
            <EmployeeDetailsCard employee={employee} />
        </Skeleton>
    )
};

export default EmployeeDetails;