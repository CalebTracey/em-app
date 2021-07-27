import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const createSchedule = () => {
  return (
    <Menu.Item key="crtsch1" icon={<PlusOutlined />}>
      Create Task
      <NavLink to={"/create-schedule"} />
    </Menu.Item>
  );
};
const fullSchedule = () => {
  return (
    <Menu.Item key="fullsch1" icon={<PlusOutlined />}>
      Full Schedule
      <NavLink to={"/full-schedule"} />
    </Menu.Item>
  );
};

export const scheduleNav = { createSchedule, fullSchedule };
