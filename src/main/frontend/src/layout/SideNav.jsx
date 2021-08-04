import './Layout.css';
import React, { useState, lazy } from 'react';
import { Layout, Menu, Spin } from 'antd';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { homeNav } from './sider-nav/HomeNav';
import { teamsNav } from './sider-nav/TeamsNav';
import { scheduleNav } from './sider-nav/ScheduleNav.jsx';
import { employeesNav } from './sider-nav/EmployeesNav';
import { TeamOutlined, UserOutlined, CalendarOutlined } from '@ant-design/icons';

const Employees = lazy(() => import('../containers/Employees'));
const Teams = lazy(() => import('../containers/Teams'));
const Schedule = lazy(() => import('../containers/Schedule'));

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNav = ({ company }) => {
  const [employees, toggleEmployees] = useState(false);
  const [schedule, toggleSchedule] = useState(false);
  const [teams, toggleTeams] = useState(false);

  const onClickHandler = (event) => {
    switch (event.key) {
      case 'employees': {
        toggleEmployees(!employees);
        break;
      }
      case 'teams': {
        toggleTeams(!teams);
        break;
      }
      case 'schedule': {
        toggleSchedule(!schedule);
        break;
      }
      default:
        break;
    }
  };

  return (
    <Sider className="sider" key="sider">
      <div className="logo" />
      <Menu key="sider-menu" theme="dark" mode="inline">
        {homeNav(company)}
        <SubMenu
          key="employees"
          icon={<UserOutlined />}
          title="Employees"
          onTitleClick={onClickHandler}
        >
          {employeesNav.addEmployee()}
          <Suspense fallback={<Spin />}>{employees ? <Employees /> : null}</Suspense>
        </SubMenu>
        <SubMenu key="teams" icon={<TeamOutlined />} title="Teams" onTitleClick={onClickHandler}>
          {teamsNav.createTeam()}
          <Suspense fallback={<Spin />}>{teams ? <Teams /> : null}</Suspense>
        </SubMenu>
        <SubMenu
          key="schedule"
          icon={<CalendarOutlined />}
          title="Schedule"
          onTitleClick={onClickHandler}
        >
          {scheduleNav.createSchedule()}
          {scheduleNav.fullSchedule()}
          <Suspense fallback={<Spin />}>{schedule ? <Schedule /> : null}</Suspense>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideNav;
