import React from "react";
// import "antd/dist/antd.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const createTeam = () => {
  return (
    <Menu.Item key="crtteam1" icon={<PlusOutlined />}>
      Create Team
      <NavLink to={"/create-team"} />
    </Menu.Item>
  );
};

export const teamsNav = { createTeam };
