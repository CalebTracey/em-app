import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

const ScheduleNav = () => (
  <Menu.Item key="create-sch" icon={<PlusOutlined />}>
    <>Create Task</>
    <NavLink key="create-sch-nav" to="/EMapp/create-schedule" />
  </Menu.Item>
);
// const fullSchedule = () => (
//   <Menu.Item key="full-sch" icon={<ScheduleOutlined />}>
//     <>Full Schedule</>
//     <NavLink key="full-sch-nav" to="/EMapp/full-schedule" />
//   </Menu.Item>
// );

// eslint-disable-next-line import/prefer-default-export
export default ScheduleNav;
