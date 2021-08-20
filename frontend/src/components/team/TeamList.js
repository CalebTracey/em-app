import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Menu, Skeleton } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const TeamList = ({ clickHandler, teams }) => {
  const listNode =
    teams.length <= 1 ? (
      <Redirect to="/EMapp" />
    ) : (
      teams.map((team) => (
        <Menu.Item
          key={team.teamName}
          icon={<TeamOutlined />}
          title={team.teamName}
          onClick={() => clickHandler(team)}
        >
          {team.teamName}
          <Link to={`/EMapp/team/${team.id}`} />
        </Menu.Item>
      ))
    );

  return !teams ? (
    <div className="skeleton">
      <Skeleton active paragraph={{ rows: 5 }} />
    </div>
  ) : (
    <Menu.ItemGroup>{listNode}</Menu.ItemGroup>
  );
};

export default TeamList;
