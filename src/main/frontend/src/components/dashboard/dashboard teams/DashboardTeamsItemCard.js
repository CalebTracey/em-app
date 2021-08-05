import React from 'react';
import './DashboardTeams.css';

import { List, Card, Typography, Badge } from 'antd';

const { Title, Text } = Typography;

const DashboardTeamsItemCard = ({ team, tasks }) => {
  return (
    <Card
      className="card"
      bordered="false"
      style={{
        boxShadow: '0 0 2.5em -2em black',
        height: '13rem',
        padding: '1em',
        borderMargin: '4px',
        margin: '.75em',
        width: 'auto',
      }}
      bodyStyle={{ padding: '1rem' }}
    >
      <Title style={{ fontSize: '1.25em', textAlign: 'center', color: '#8c8c8c' }} level={3}>
        {team.teamName}
      </Title>
      <Card bodyStyle={{ padding: 0 }}>
        <List>
          {/* <Popover
            placement="right"
            content={team.employees.map((e) => (
              <p>{`${e.firstName} ${e.lastName}`}</p>
            ))}
            title="Team Members"
          > */}
          <List.Item style={{ fontSize: '1em', padding: '.5em' }}>
            <Text style={{ color: '#bfbfbf', fontWeight: 600, padding: '1ch' }}>Members: </Text>
            <Badge className="team-badge" count={team.employees.length} />
          </List.Item>
          {/* </Popover> */}
          {/* <Popover
            placement="right"
            content={tasks.map((task) => (
              <p>{`${task.description}`}</p>
            ))}
            title="Tasks"
          > */}
          <List.Item style={{ fontSize: '1em', padding: '.5em' }}>
            <Text style={{ color: '#bfbfbf', fontWeight: 600, padding: '1ch' }}>Tasks: </Text>
            <Badge className="team-badge" count={team.teamTasks.length} />
          </List.Item>
          {/* </Popover> */}
        </List>
      </Card>
    </Card>
  );
};

export default DashboardTeamsItemCard;
