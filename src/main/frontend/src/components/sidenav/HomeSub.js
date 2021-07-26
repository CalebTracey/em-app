import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

export const HomeSub = () => {
  return (
    <Menu.Item key="home" icon={<HomeOutlined />}>
      <div>Home</div>
      <NavLink key="home-nav" to="/" />
    </Menu.Item>
  );
};
