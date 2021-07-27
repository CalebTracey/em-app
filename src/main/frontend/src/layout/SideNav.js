import React, { useState, lazy } from "react";
import { Layout, Menu, Spin } from "antd";
import { Suspense } from "react";
import { homeNav } from "./sider-nav/HomeNav";
import { teamsNav } from "./sider-nav/TeamsNav";
import { scheduleNav } from "./sider-nav/ScheduleNav";
import { employeesNav } from "./sider-nav/EmployeesNav";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";

const Employees = lazy(() => import("../containers/Employees"));
const Teams = lazy(() => import("../containers/Teams"));
const Schedule = lazy(() => import("../containers/Schedule"));

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNav = ({ company }) => {
  const [employees, toggleEmployees] = useState(false);
  const [schedule, toggleSchedule] = useState(false);
  const [teams, toggleTeams] = useState(false);

  const toggle = (event) => {
    switch (event.key) {
      case "sub1":
        return toggleEmployees(!employees);
      case "sub2":
        return toggleTeams(!teams);
      case "sub3":
        return toggleSchedule(!schedule);
      default:
        break;
    }
  };

  return (
    <Sider
      style={{ overflow: "auto", position: "fixed", left: 0, height: "100vh" }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        {homeNav(company)}
        <SubMenu
          key="sub1"
          icon={<UserOutlined />}
          title="Employees"
          onTitleClick={toggle}
        >
          {employeesNav.addEmployee()}
          <Suspense fallback={<Spin />}>
            {employees ? <Employees /> : null}
          </Suspense>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<TeamOutlined />}
          title="Teams"
          onTitleClick={toggle}
        >
          {teamsNav.createTeam()}
          <Suspense fallback={<Spin />}>{teams ? <Teams /> : null}</Suspense>
        </SubMenu>
        <SubMenu
          key="sub3"
          icon={<UserOutlined />}
          title="Schedule"
          onTitleClick={toggle}
        >
          {scheduleNav.createSchedule()}
          {scheduleNav.fullSchedule()}
          <Suspense fallback={<Spin />}>
            {schedule ? <Schedule /> : null}
          </Suspense>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideNav;
