import './Layout.css';
import React, { useState, lazy, Suspense } from 'react';
import { Layout, Menu, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { TeamOutlined, UserOutlined, ScheduleOutlined } from '@ant-design/icons';
import HomeNav from './sider-nav/HomeNav';
import TeamsNav from './sider-nav/TeamsNav';
import ScheduleNav from './sider-nav/ScheduleNav';
import EmployeesNav from './sider-nav/EmployeesNav';
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

const Employees = lazy(() => import('../containers/Employees'));
const Teams = lazy(() => import('../containers/Teams'));
const Schedule = lazy(() => import('../containers/Schedule'));

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNav = () => {
  const employeeState = useSelector((state) => state.employees.employeeData);
  const teamState = useSelector((state) => state.teams.teamData);
  const taskState = useSelector((state) => state.employees.teamTaskData);
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
        <HomeNav />
        <SubMenu
          key="employees"
          icon={<UserOutlined />}
          title="Employees"
          onTitleClick={onClickHandler}
        >
          <EmployeesNav />
          <Suspense fallback={<Spin />}>
            {employees ? <Employees employees={employeeState} /> : null}
          </Suspense>
        </SubMenu>
        <SubMenu key="teams" icon={<TeamOutlined />} title="Teams" onTitleClick={onClickHandler}>
          <TeamsNav />
          <Suspense fallback={<Spin />}>{teams ? <Teams teams={teamState} /> : null}</Suspense>
        </SubMenu>
        <SubMenu
          key="schedule"
          icon={<ScheduleOutlined />}
          title="Schedule"
          onTitleClick={onClickHandler}
        >
          <ScheduleNav />
          <Suspense fallback={<Spin />}>
            {schedule ? <Schedule tasks={taskState} /> : null}
          </Suspense>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideNav;
