import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { PlusOutlined, CalendarOutlined } from '@ant-design/icons';

const createSchedule = () => (
  <Menu.Item key="crtsch1" icon={<PlusOutlined />}>
    Create Task
    <NavLink to="/create-schedule" />
  </Menu.Item>
);
const fullSchedule = () => (
  <Menu.Item key="fullsch1" icon={<CalendarOutlined />}>
    Full Schedule
    <NavLink to="/full-schedule" />
  </Menu.Item>
);

// eslint-disable-next-line import/prefer-default-export
export const scheduleNav = { createSchedule, fullSchedule };
