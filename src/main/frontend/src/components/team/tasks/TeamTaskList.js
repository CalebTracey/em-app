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
    title: 'Task',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Client',
    key: 'client',
    dataIndex: 'client',
  },
  {
    title: 'Start Date',
    key: 'taskStart',
    dataIndex: 'taskStart',
    // sorter: (a, b) => a.start - b.start,
  },
  {
    title: 'Deadline',
    key: 'remaining',
    dataIndex: 'remaining',
    sorter: (a, b) => a.remaining - b.remaining,
  },

  {
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

const TeamTaskList = ({ tasks }) => {
  console.log({ tasks });
  return !tasks ? (
    <Empty />
  ) : (
    <Table
      pagination={{ hideOnSinglePage: true }}
      columns={columns}
      dataSource={tasks}
      size="large"
    />
  );
};
export default TeamTaskList;
