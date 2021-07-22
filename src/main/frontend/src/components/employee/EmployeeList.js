import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const EmployeeList = ({ isLoading }) => {
    const employees = useSelector(state => state.employees.employeeData)
    const listNode = employees.map((employee) => {
        return (
            <Menu.Item
                key={employee.employeeId}
                icon={<UserOutlined />}
                style={{ cursor: 'pointer' }}>
                {`${employee.lastName}, ${employee.firstName}`}
                <Link to={`/employee/${employee.employeeId}`} />
            </Menu.Item>
        )
    });
    return (
        isLoading ? "Loading..." :
            <Menu.ItemGroup children={listNode} />
    )
}

export default EmployeeList;