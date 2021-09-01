/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Descriptions, Tag, Card, Typography, PageHeader, Button } from 'antd';
import './Task.css';
import { Link } from 'react-router-dom';

const { Text } = Typography;

const TaskDetailsCard = ({ task }) => (
  <Card
    key={task.id}
    style={{ boxShadow: '0 0 2.5em -2em', overflow: 'hidden' }}
    bodyStyle={{ padding: '2.5ch' }}
  >
    <PageHeader
      style={{ textOverflow: 'ellipsis', overflow: 'hidden', textTransform: 'capitalize' }}
      title={task.description}
      subTitle={`${task.taskStart} - ${task.taskEnd}`}
      className="site-page-header"
      tags={
        !task.team ? null : (
          <Link to={`/EMapp/team/${task.team.id}`}>
            <Tag color="blue">{task.team.teamName}</Tag>
          </Link>
        )
      }
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        // <AddTeamDropdown teams={teams} task={task} />,
      ]}
    />
    <Card style={{ boxShadow: '0 0 2.25em -2em' }}>
      <Typography>
        <Descriptions
          contentStyle={{ wordBreak: 'break-all' }}
          labelStyle={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            minHeight: '3ch',
            overflowWrap: 'anywhere',
          }}
          bordered="true"
          size="small"
          title={<Text style={{ margin: '.75em' }}>Task Details</Text>}
        >
          <Descriptions.Item label="Start Date:">
            <Text strong>{task.taskStart}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="End Date:">
            <Text strong>{task.taskEnd}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Deadline:">
            <Text strong>{`${task.remaining} days`}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Client:">
            <Text>{task.client}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Client Phone:">
            <Text>{task.clientPhone}</Text>
          </Descriptions.Item>
        </Descriptions>
      </Typography>
    </Card>
  </Card>
);

export default TaskDetailsCard;
