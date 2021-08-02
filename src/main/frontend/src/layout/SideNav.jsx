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
  const employeeState = useSelector((state) => state.teams.employeeData);
  const teamState = useSelector((state) => state.teams.employeeData);

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
      default:
        break;
    }
  };
  // flex: 'auto',
  // margin: '2.5rem 1.5rem',
  // padding: '2.5rem',
  // // minHeight: 280,
  // background: '#fafafa',
  return (
    <Sider
      key="sider"
      style={{
        boxShadow: '0 0 0.5em 0',
        overflow: 'auto',
        position: 'fixed',
        left: 0,
        height: '100vh',
        maxWidth: '15%',
        width: '15%',
      }}
    >
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
          <Suspense fallback={<Spin />}>
            {employees ? <Employees employees={employeeState} /> : null}
          </Suspense>
        </SubMenu>
        <SubMenu key="teams" icon={<TeamOutlined />} title="Teams" onTitleClick={onClickHandler}>
          {teamsNav.createTeam()}
          <Suspense fallback={<Spin />}>{teams ? <Teams teams={teamState} /> : null}</Suspense>
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
