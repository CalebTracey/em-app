import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const EmployeeList = ({ setSelectedEmployee }) => {
    const employees = useSelector(state => state.employees.employeeData)
    const listNode = employees.map((e) => {
        return (
            <Menu.Item
                key={e.key}
                icon={<UserOutlined />}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedEmployee(e)} >
                {`${e.lastName}, ${e.firstName}`}
                <NavLink key={e.key} to={`/employee/${e.key}`} />
            </Menu.Item>
        )
    })
    return (
        !employees ? "Loading..." :
            <Menu.ItemGroup key="item-group-1" children={listNode} />
    )

}

export default EmployeeList;