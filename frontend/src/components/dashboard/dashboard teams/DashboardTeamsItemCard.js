/* eslint-disable react/prop-types */
import React from 'react';
import './DashboardTeams.css';
import { List, Card, Badge } from 'antd';

const DashboardTeamsItemCard = ({ team }) => (
  <div className="team-card">
    <p className="title-text">{team.teamName}</p>
    <div className="inner-card">
      <Card bodyStyle={{ padding: 0 }}>
        <List>
          <List.Item style={{ padding: '.5ch' }}>
            <p className="inner-card-text">Members: </p>
            <div className="badge-wrapper">
              <Badge className="team-badge" count={team.employees.length} />
            </div>
          </List.Item>
          <List.Item style={{ padding: '.5ch', textAlign: 'initial' }}>
            <p className="inner-card-text">Tasks: </p>
            <div className="badge-wrapper">
              <Badge className="team-badge" count={team.teamTasks.length} />
            </div>
          </List.Item>
        </List>
      </Card>
    </div>
  </div>
);

export default DashboardTeamsItemCard;
