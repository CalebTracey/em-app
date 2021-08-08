import React from 'react';
import './DashboardTeams.css';

import { List, Card, Badge, Space } from 'antd';

const DashboardTeamsItemCard = ({ team }) => {
  return (
    <div className="team-card">
      <p className="title-text">{team.teamName}</p>
      <div className="inner-card">
        <Card bodyStyle={{ padding: 0 }}>
          <List>
            <List.Item style={{ padding: '.5ch' }}>
              <Space>
                <p className="inner-card-text">Members: </p>
                <Badge className="team-badge" count={team.employees.length} />
              </Space>
            </List.Item>
            <List.Item style={{ padding: '.5ch' }}>
              <Space>
                <p className="inner-card-text">Tasks: </p>
                <Badge className="team-badge" count={team.teamTasks.length} />
              </Space>
            </List.Item>
          </List>
        </Card>
      </div>
    </div>
  );
};

export default DashboardTeamsItemCard;
