/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const EmployeeList = ({ clickHandler }) => {
  const employees = useSelector((state) => state.employees.employeeData);
  const listNode = employees.map((employee) => (
    <Menu.Item
      key={parseInt(employee.id, 10)}
      icon={<UserOutlined />}
      style={{ cursor: 'pointer' }}
    >
      {`${employee.lastName}, ${employee.firstName}`}
      <Link
        key={employee.id}
        to={`/EMapp/employees/${employee.id}`}
        onClick={() => clickHandler(employee)}
      />
    </Menu.Item>
  ));
  return employees ? <Menu.ItemGroup>{listNode}</Menu.ItemGroup> : <Spin />;
};

export default EmployeeList;
