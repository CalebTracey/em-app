import React, { Suspense, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  UserOutlined,
  HomeOutlined,
  TeamOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Employees from '../containers/Employees';
import Teams from '../containers/Teams';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNav = ({ collapsed }) => {
  const [employeeState, setEmployeeState] = useState(null);
  const [teamState, setTeamState] = useState(null);
  const [position, setPosition] = useState('unset');

  const employees = () => {
    return (
      <Suspense
        fallback={
          <div>
            <Spin />
          </div>
        }
      >
        <Employees />
      </Suspense>
    );
  };

  const teams = () => {
    return (
      <Suspense
        fallback={
          <div>
            <Spin />
          </div>
        }
      >
        <Teams />
      </Suspense>
    );
  };
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        // position: ""
        overflow: 'auto',
        position: 'fixed',
        height: '100vh',
        flex: '0 0 200px',
        maxWidth: '200px',
        minWidth: '200px',
        width: '200px',
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <div>Home</div>
          <NavLink key="home-nav" to="/" />
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<UserOutlined />}
          title="Employees"
          onTitleClick={() => setEmployeeState(employees)}
        >
          <Menu.Item key="add-employee" icon={<PlusOutlined />}>
            Add Employee
            <NavLink key="employee-add-nav" to={'/addemployee'} />
          </Menu.Item>
          {employeeState}
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<TeamOutlined />}
          title="Teams"
          onTitleClick={() => setTeamState(teams)}
        >
          <Menu.Item key="create-team" icon={<PlusOutlined />}>
            Create Team
            <NavLink to={'/createteam'} />
          </Menu.Item>
          {teamState}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideNav;
