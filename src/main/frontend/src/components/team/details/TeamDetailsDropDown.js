import React from 'react';
import { Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const TeamDetailsDropDown = ({ handleCreateTask, showDeleteTeamConfirm }) => {
  const menu = (
    <Menu>
      <Menu.Item key="add" onClick={handleCreateTask}>
        Add Task
      </Menu.Item>
      <Menu.Item key="delete" onClick={showDeleteTeamConfirm}>
        Delete Team
      </Menu.Item>
      <Menu.Item key="three">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <MenuOutlined style={{ fontSize: 'x-large' }} />
    </Dropdown>
  );
};
export default TeamDetailsDropDown;
