/* eslint-disable react/prop-types */
import React from 'react';
import { Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const TeamDetailsDropDown = ({ showDeleteTeamConfirm }) => {
  const menu = () => (
    <Menu>
      <Menu.Item key="add">
        <div key="td-add">Add Task</div>
      </Menu.Item>

      <Menu.Item key="delete" onClick={showDeleteTeamConfirm}>
        <div key="td-delete">Delete Team</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <MenuOutlined key="td-menu-icon" style={{ fontSize: 'x-large' }} />
    </Dropdown>
  );
};
export default TeamDetailsDropDown;
