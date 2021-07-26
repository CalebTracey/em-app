import React, { Suspense, lazy } from "react";
import "antd/dist/antd.css";
import { Menu, Spin } from "antd";
import { NavLink } from "react-router-dom";
import { PlusOutlined, TeamOutlined } from "@ant-design/icons";

const Teams = lazy(() => import("../../containers/Teams"));

const { SubMenu } = Menu;

export const TeamsSub = ({ teamsToggle, showTeams }) => {
  return (
    <SubMenu
      key="sub2"
      icon={<TeamOutlined />}
      title="Teams"
      //   subMenuOpenDelay=".5"
      //   subMenuCloseDelay=".5"
      onTitleClick={teamsToggle}
    >
      <Menu.Item key="create-team" icon={<PlusOutlined />}>
        Create Team
        <NavLink to={"/createteam"} />
      </Menu.Item>
      <Suspense fallback={<Spin />}>{showTeams ? <Teams /> : null}</Suspense>
    </SubMenu>
  );
};
