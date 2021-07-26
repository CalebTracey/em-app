import "antd/dist/antd.css";
import React, { useState, lazy } from "react";
import { Layout, Menu, Spin } from "antd";
import { HomeSub } from "./HomeSub";
import { Suspense } from "react";
import { TeamsSub } from "./TeamsSub";
import { EmployeesSub } from "./EmployeesSub";

const { Sider } = Layout;

const SideNav = () => {
  const [showEmployees, setShowEmployees] = useState(false);
  const [showTeams, setShowTeams] = useState(false);

  const employeesToggle = () => {
    setShowEmployees(!showEmployees);
  };

  const teamsToggle = () => {
    setShowTeams(!showTeams);
  };

  return (
    <Sider>
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <HomeSub />

        <EmployeesSub
          key="employees"
          employeesToggle={employeesToggle}
          showEmployees={showEmployees}
        />

        <TeamsSub key="teams" teamsToggle={teamsToggle} showTeams={showTeams} />
      </Menu>
    </Sider>
  );
};

export default SideNav;
