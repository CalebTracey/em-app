import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { PlusOutlined, CalendarOutlined } from '@ant-design/icons';

const createSchedule = () => (
  <Menu.Item key="create-sch" icon={<PlusOutlined />}>
    <>Create Task</>
    <NavLink key="create-sch-nav" to="/create-schedule" />
  </Menu.Item>
);
const fullSchedule = () => (
  <Menu.Item key="full-sch" icon={<CalendarOutlined />}>
    <>Full Schedule</>
    <NavLink key="full-sch-nav" to="/full-schedule" />
  </Menu.Item>
);

// eslint-disable-next-line import/prefer-default-export
export const scheduleNav = { createSchedule, fullSchedule };
