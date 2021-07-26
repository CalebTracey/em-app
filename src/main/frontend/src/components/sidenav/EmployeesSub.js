import React, { lazy } from "react";
import "antd/dist/antd.css";
import { Menu, Spin } from "antd";
import { NavLink } from "react-router-dom";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Suspense } from "react";

const Employees = lazy(() => import("../../containers/Employees"));

const { SubMenu } = Menu;

export const EmployeesSub = ({ showEmployees, employeesToggle }) => {
  return (
    <SubMenu
      key="sub1"
      icon={<UserOutlined />}
      title="Employees"
      // subMenuOpenDelay=".5"
      // subMenuCloseDelay=".5"
      onTitleClick={employeesToggle}
    >
      <Menu.Item key="add-employee" icon={<PlusOutlined />}>
        Add Employee
        <NavLink key="employee-add-nav" to={"/addemployee"} />
      </Menu.Item>
      <Suspense fallback={<Spin />}>
        {showEmployees ? <Employees /> : null}
      </Suspense>
    </SubMenu>
  );
};
