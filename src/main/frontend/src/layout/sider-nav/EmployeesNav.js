import React from "react";
// import "antd/dist/antd.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const addEmployee = () => {
  return (
    <div key="empadd-main">
      <Menu.Item key="empadd1" icon={<PlusOutlined />}>
        Add Employee
        <NavLink key="empadd2" to={"/addemployee"} />
      </Menu.Item>
    </div>
  );
};

export const employeesNav = {addEmployee}