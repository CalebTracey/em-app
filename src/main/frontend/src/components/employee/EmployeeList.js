import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import EmployeeListItem from './EmployeeListItem';


const EmployeeList = ({isLoading}) => {
    const employees = useSelector(state => state.employees.employeeData)
    const listNode = employees.map((employee) => {
        return (
            <EmployeeListItem key={employee.employeeId} employee={employee} />
        )
    });
    return (
        isLoading ? "Loading..." :
            <Menu.ItemGroup key="group1" children={listNode} />
            
    )
}

export default EmployeeList;