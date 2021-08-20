import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { CalendarOutlined } from '@ant-design/icons';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const TaskList = ({ tasks, clickHandler }) => {
  const listNode = tasks.map((task) => {
    const start = new Date(task.taskStart);
    const end = new Date(task.taskEnd);
    return (
      <Menu.Item key={task.id} icon={<CalendarOutlined />} style={{ cursor: 'pointer' }}>
        {`${start.getMonth()}/${start.getDate()} - ${end.getMonth()}/${end.getDate()}`}
        <Link key={task.id} to={`/EMapp/task/${task.id}`} onClick={() => clickHandler(task)} />
      </Menu.Item>
    );
  });
  // eslint-disable-next-line react/no-children-prop
  return <Menu.ItemGroup children={listNode} />;
};

export default TaskList;
