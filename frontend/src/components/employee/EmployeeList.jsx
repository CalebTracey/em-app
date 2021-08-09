import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const EmployeeList = ({ employees, clickHandler }) => {
  const listNode = employees.map((employee) => (
    <Menu.Item key={employee.id} icon={<UserOutlined />} style={{ cursor: 'pointer' }}>
      {`${employee.lastName}, ${employee.firstName}`}
      <Link
        key={employee.id}
        to={`/EMapp/employees/${employee.id}`}
        onClick={() => clickHandler(employee)}
      />
    </Menu.Item>
  ));
  return <Menu.ItemGroup>{listNode}</Menu.ItemGroup>;
};

export default EmployeeList;
