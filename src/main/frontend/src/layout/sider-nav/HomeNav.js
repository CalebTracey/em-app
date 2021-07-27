import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

export const homeNav = () => {
  return (
    <Menu.Item key="home" icon={<HomeOutlined />}>
      <div>Home</div>
      <NavLink key="homenav" to="/" />
    </Menu.Item>
  );
};
