import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Menu } from 'antd';
import useEmployees from '../hooks/useEmployees';


const Employees = () => {
    useEmployees();
   // const employees = useSelector(state => state.employees)


    // useEffect(() => {
    //     if (list) {
    //         return;
    //     }
    //     const employeeList =
    //         employees.map((e, i) => {
    //             return <Menu.Item key={i}>
    //                 {e.firstName}
    //             </Menu.Item>
    //         })
    //         setList(employeeList);
    // }, [employees, list])

    return (
        // <SubMenu key="1" text="Employees">
        //     {employees.map((e) => {
        //         return <Menu.Item key={e.firstName + e.lastName} >{e.firstName}</Menu.Item>

        //     })}
        // </SubMenu>
        <div></div>

    );
};

export default Employees;