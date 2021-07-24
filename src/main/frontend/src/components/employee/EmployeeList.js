import React, { Suspense, lazy, useRef } from 'react';
import { Menu, Spin } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const EmployeeList = ({ employees, clickHandler }) => {
    console.log(employees)
    const ref = useRef()
    const listNode = employees.map((employee) => {
        return (
            <Menu.Item
                key={employee.id}
                icon={<UserOutlined />}
                style={{ cursor: 'pointer' }}
            >
                {`${employee.lastName}, ${employee.firstName}`}
                <Link key={employee.id} to={`/employee/${employee.id}`}
                    onClick={() => clickHandler(employee)} />
            </Menu.Item>
        );
    });
    return (
        <Menu.ItemGroup ref={ref} children={listNode} />
    )
}

export default EmployeeList;