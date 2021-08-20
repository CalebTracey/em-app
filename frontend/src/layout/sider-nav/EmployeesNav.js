import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

const EmployeesNav = () => (
  <Menu.Item key="empadd" icon={<PlusOutlined />}>
    <>Add Employee</>
    <NavLink key="empadd-nav" to="/EMapp/addemployee" />
  </Menu.Item>
);

export default EmployeesNav;
