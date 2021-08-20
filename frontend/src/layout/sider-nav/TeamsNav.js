import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

const TeamsNav = () => (
  <Menu.Item key="create-team" icon={<PlusOutlined />}>
    <>Create Team</>
    <NavLink key="create-team-nav" to="/EMapp/create-team" />
  </Menu.Item>
);

export default TeamsNav;
