/* eslint-disable react/prop-types */
import React from 'react';
import { Table, Dropdown, Menu, Empty } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="complete">Mark Completed</Menu.Item>
    <Menu.Item key="remove">Delete Task</Menu.Item>
  </Menu>
);
const columns = [
  {
    ellipsis: 'true',
    title: `Tasks`,
    key: 'name',
    dataIndex: 'name',
  },
  {
    ellipsis: 'true',
    title: 'Client',
    key: 'client',
    dataIndex: 'client',
  },
  {
    ellipsis: 'true',
    title: 'Start Date',
    key: 'taskStart',
    dataIndex: 'taskStart',
    // sorter: (a, b) => a.start - b.start,
  },
  {
    ellipsis: 'true',
    title: 'Deadline (days)',
    key: 'remaining',
    dataIndex: 'remaining',
    sorter: (a, b) => a.remaining - b.remaining,
  },

  {
    ellipsis: 'true',
    title: false,
    dataIndex: 'dropdown',
    key: 'dropdown',
    render: () => (
      <Dropdown overlay={menu}>
        <span>
          <DownCircleOutlined />
        </span>
      </Dropdown>
    ),
  },
];
const TeamTaskList = ({ tasks }) =>
  !tasks ? (
    <Empty />
  ) : (
    <Table
      pagination={{ hideOnSinglePage: true, pageSize: 4 }}
      columns={columns}
      dataSource={tasks}
      size="default"
    />
  );
export default TeamTaskList;
