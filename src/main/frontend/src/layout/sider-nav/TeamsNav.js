import React from 'react';
// import "antd/dist/antd.css";
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

const createTeam = () => {
  return (
    <Menu.Item key="create-team" icon={<PlusOutlined />}>
      <>Create Team</>
      <NavLink key="create-team-nav" to={'/create-team'} />
    </Menu.Item>
  );
};

export const teamsNav = { createTeam };
