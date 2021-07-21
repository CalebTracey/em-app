import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const EmployeeListItem = ({ employee }) => {
    return (
        employee.employeeId != null ?
        <Menu.Item
            key={employee.employeeId}
            icon={<UserOutlined />}
            style={{ cursor: 'pointer' }}
        // onClick={() => setSelectedEmployee(e)} 
        >
            {`${employee.lastName}, ${employee.firstName}`}
            <NavLink to={`/employee/${employee.employeeId}`} />
        </Menu.Item>
        : "Loadingggggg"
    )
};

export default EmployeeListItem;