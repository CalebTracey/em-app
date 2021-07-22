import React from 'react';
import { Table, Dropdown, Menu } from 'antd'
import {
    DownCircleOutlined,
} from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key="complete">Mark Completed</Menu.Item>
        <Menu.Item key="remove">Delete Task</Menu.Item>
    </Menu>
);

const columns = [
    {
        title: 'Tasks',
        dataIndex: 'taskName',
    },
    {
        title: 'Start Date',
        dataIndex: 'startDate',
        sorter: (a, b) => a.startDate - b.startDate,
    },
    {
        title: 'End Goal',
        dataIndex: 'endDate',
        sorter: (a, b) => a.endDate - b.endDate,
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
    const taskNameUpper = tasks.map((task) => {
        const tn = task.taskName;
        const upperTaskName = tn.charAt(0).toUpperCase() + tn.slice(1);
        return (
            Object.defineProperty(task, 'taskName', {
                value: upperTaskName
            })
        );
    })
    return (
        <Table
            pagination={{ hideOnSinglePage: true }}
            columns={columns}
            dataSource={taskNameUpper}
            size="middle"
        />
    );
}
export default TeamTaskList;