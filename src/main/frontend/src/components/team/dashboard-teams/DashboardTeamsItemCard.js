import React from 'react';
import { List, Card, Typography, Badge, Popover } from 'antd';

const { Title, Text } = Typography;

const DashboardTeamsItemCard = ({ team, tasks }) => {
  return (
    <Card
      bordered="false"
      hoverable
      style={{
        margin: '.75em',
        width: 'auto',
      }}
      bodyStyle={{ padding: '.5ch' }}
    >
      <Title style={{ fontSize: '1.25em', textAlign: 'center' }} level={3}>
        {team.teamName}
      </Title>
      <Card bodyStyle={{ padding: '1em' }}>
        <List>
          <Popover
            placement="right"
            content={team.employees.map((e) => (
              <p>{`${e.firstName} ${e.lastName}`}</p>
            ))}
            title="Team Members"
          >
            <List.Item style={{ fontSize: '1em', padding: '.25ch' }}>
              <Text>Members: </Text>
              <Badge className="team-badge" count={team.employees.length} />
            </List.Item>
          </Popover>
          <Popover
            placement="right"
            content={tasks.map((task) => (
              <p>{`${task.description}`}</p>
            ))}
            title="Tasks"
          >
            <List.Item style={{ fontSize: '1em', padding: '.25ch' }}>
              <Text>Tasks: </Text>
              <Badge className="team-badge" count={team.teamTasks.length} />
            </List.Item>
          </Popover>
        </List>
      </Card>
    </Card>
  );
};

export default DashboardTeamsItemCard;
