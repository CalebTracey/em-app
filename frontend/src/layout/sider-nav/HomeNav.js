import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const HomeNav = () => (
  <Menu.Item key="home" icon={<HomeOutlined />} style={{ paddingLeft: '2ch' }}>
    <>Home</>
    <NavLink key="home-nav" to="/EMapp" />
  </Menu.Item>
);

export default HomeNav;
