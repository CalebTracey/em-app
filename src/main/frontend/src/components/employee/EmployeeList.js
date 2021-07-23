import React, { Suspense } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const EmployeeList = ({ clickHandler, employees }) => {

    console.log(employees)
    const listNode = employees.map((employee) => {
        return (
            <Menu.Item
                key={employee.id}
                icon={<UserOutlined />}
                style={{ cursor: 'pointer' }}
            >
                {`${employee.lastName}, ${employee.firstName}`}
                <Link to={`/employee/${employee.id}`}
                    onClick={() => clickHandler(employee)} />
            </Menu.Item>
        )
    });
    return (
        <div>
            <Menu.ItemGroup children={listNode} />

        </div>
        

    )
}

export default EmployeeList;